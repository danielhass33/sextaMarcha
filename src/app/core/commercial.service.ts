import { Injectable, signal } from "@angular/core";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { firebaseApp } from "./firebase";

export interface PartnerProfile {
  uid: string;
  email: string;
  name: string;
  business: string;
  cnpj: string;
  crdd: string;
  phone: string;
  city: string;
  role: "partner" | "master";
  status: "pending" | "active" | "suspended";
  commissionRate: number | null;
  createdAt?: unknown;
}
export interface Sale {
  id: string;
  partnerId: string;
  courseId: string;
  amount: number;
  commissionAmount: number;
  status: string;
  createdAt?: unknown;
}
@Injectable({ providedIn: "root" })
export class CommercialService {
  readonly user = signal<User | null>(null);
  readonly loading = signal(true);
  readonly profile = signal<PartnerProfile | null>(null);
  readonly sales = signal<Sale[]>([]);
  readonly partners = signal<PartnerProfile[]>([]);
  readonly error = signal("");
  readonly role = signal<"master" | "partner" | null>(null);
  private auth = firebaseApp ? getAuth(firebaseApp) : null;
  private db = firebaseApp ? getFirestore(firebaseApp) : null;
  constructor() {
    if (!this.auth || !this.db) {
      this.loading.set(false);
      this.error.set("Configure o Firebase em environment.ts.");
      return;
    }
    onAuthStateChanged(this.auth, async (user) => {
      this.loading.set(true);
      this.user.set(user);
      this.profile.set(null);
      this.role.set(null);
      this.sales.set([]);
      this.partners.set([]);
      this.error.set("");
      if (user) {
        try {
          const snap = await getDoc(doc(this.db!, "partners", user.uid));
          if (snap.exists()) {
            const p = { ...snap.data(), uid: user.uid } as PartnerProfile;
            this.profile.set(p);
            if (
              p.status === "active" &&
              (p.role === "partner" || p.role === "master")
            )
              this.role.set(p.role);
            if (this.role()) await this.refresh();
          }
        } catch (e) {
          this.error.set(
            "Não foi possível carregar seu perfil. Confira a conexão e as permissões do Firestore.",
          );
          console.error(e);
        }
      }
      this.loading.set(false);
    });
  }
  async reloadProfile() {
    if (!this.db || !this.user()) return;
    const snap = await getDoc(doc(this.db, "partners", this.user()!.uid));
    if (!snap.exists()) return;
    const p = { ...snap.data(), uid: this.user()!.uid } as PartnerProfile;
    this.profile.set(p);
    this.role.set(
      p.status === "active" && (p.role === "partner" || p.role === "master")
        ? p.role
        : null,
    );
    if (this.role()) await this.refresh();
  }
  async login(email: string, password: string) {
    if (!this.auth) throw Error("Firebase não configurado");
    await signInWithEmailAndPassword(this.auth, email.trim(), password);
  }
  async logout() {
    if (this.auth) await signOut(this.auth);
  }
  async resetPassword(email: string) {
    if (!this.auth) throw Error("Firebase não configurado");
    await sendPasswordResetEmail(this.auth, email.trim());
  }
  async refresh() {
    if (!this.db || !this.user() || !this.role()) return;
    const master = this.role() === "master";
    const salesRef = collection(this.db, "sales");
    const salesQuery = master
      ? salesRef
      : query(salesRef, where("partnerId", "==", this.user()!.uid));
    const [sales, partners] = await Promise.all([
      getDocs(salesQuery),
      master ? getDocs(collection(this.db, "partners")) : Promise.resolve(null),
    ]);
    this.sales.set(sales.docs.map((d) => ({ id: d.id, ...d.data() }) as Sale));
    this.partners.set(
      partners
        ? partners.docs.map(
            (d) => ({ uid: d.id, ...d.data() }) as PartnerProfile,
          )
        : [],
    );
  }
}

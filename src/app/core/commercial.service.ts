import { Injectable, signal } from '@angular/core';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { firebaseApp } from './firebase';
export interface Sale { id: string; partnerId: string; courseId: string; amount: number; commissionAmount: number; status: string; createdAt?: unknown; }
@Injectable({providedIn:'root'})
export class CommercialService {
  readonly user = signal<User|null>(null);
  readonly loading = signal(true);
  readonly sales = signal<Sale[]>([]);
  readonly role = signal<'admin'|'partner'|null>(null);
  private auth = firebaseApp ? getAuth(firebaseApp) : null;
  private db = firebaseApp ? getFirestore(firebaseApp) : null;
  constructor(){
    if (!this.auth || !this.db) { this.loading.set(false); return; }
    onAuthStateChanged(this.auth, async user => {
      this.user.set(user); this.role.set(null); this.sales.set([]);
      if (user) {
        try {
          const {doc,getDoc} = await import('firebase/firestore');
          const profile = await getDoc(doc(this.db!, 'partners', user.uid));
          const data = profile.data();
          if (data?.['status']==='active' && (data?.['role']==='admin'||data?.['role']==='partner')) this.role.set(data['role']);
          if (this.role()) await this.refresh();
        } catch(e){ console.error('Falha ao carregar perfil comercial',e); }
      }
      this.loading.set(false);
    });
  }
  async login(email:string,password:string){ if(!this.auth) throw new Error('Firebase não configurado'); await signInWithEmailAndPassword(this.auth,email,password); }
  async logout(){if(this.auth) await signOut(this.auth);}
  async refresh(){
    if(!this.db||!this.user()||!this.role()) return;
    const ref=collection(this.db,'sales');
    const q=this.role()==='admin'?ref:query(ref,where('partnerId','==',this.user()!.uid));
    const snapshot=await getDocs(q);
    this.sales.set(snapshot.docs.map(d=>({id:d.id,...d.data()} as Sale)));
  }
}

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";

import { environment } from "../../environments/environment";

// ==========================================
// 1. VERIFICAR CONFIGURAÇÃO DO FIREBASE
// ==========================================

export const firebaseReady =
  !!environment.firebase.apiKey &&
  environment.firebase.apiKey !== "REPLACE_ME" &&
  !!environment.appCheckSiteKey;

// ==========================================
// 2. INICIALIZAR FIREBASE
// ==========================================

export const firebaseApp =
  environment.firebase.apiKey && environment.firebase.apiKey !== "REPLACE_ME"
    ? getApps().length
      ? getApp()
      : initializeApp(environment.firebase)
    : null;

// ==========================================
// 3. APP CHECK - DEBUG LOCAL
// ==========================================

// Habilita o modo debug apenas no localhost.
// Nunca utiliza token fixo no código.

if (
  firebaseApp &&
  !environment.production &&
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname)
) {
  (
    globalThis as typeof globalThis & {
      FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
    }
  ).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

// ==========================================
// 4. INICIALIZAR APP CHECK
// ==========================================

if (
  firebaseApp &&
  environment.appCheckSiteKey &&
  typeof window !== "undefined"
) {
  initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaEnterpriseProvider(environment.appCheckSiteKey),
    isTokenAutoRefreshEnabled: true,
  });
}

// ==========================================
// 5. CLOUD FUNCTIONS
// ==========================================

// Região São Paulo
export const functions = firebaseApp
  ? getFunctions(firebaseApp, "southamerica-east1")
  : null;

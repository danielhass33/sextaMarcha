import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { environment } from '../../environments/environment';

export const firebaseReady = environment.firebase.apiKey !== 'REPLACE_ME' && !!environment.appCheckSiteKey;
export const firebaseApp = environment.firebase.apiKey !== 'REPLACE_ME'
  ? (getApps().length ? getApp() : initializeApp(environment.firebase)) : null;
if (firebaseApp && environment.appCheckSiteKey) {
  initializeAppCheck(firebaseApp, { provider: new ReCaptchaEnterpriseProvider(environment.appCheckSiteKey), isTokenAutoRefreshEnabled: true });
}
export const functions = firebaseApp ? getFunctions(firebaseApp, 'southamerica-east1') : null;

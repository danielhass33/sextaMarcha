/** Firebase Web SDK public identifiers (not service-account secrets). Replace with Firebase Console values. */
export const environment = {
  production: false,
  firebase: {
    apiKey: "REPLACE_ME",
    authDomain: "REPLACE_ME",
    projectId: "REPLACE_ME",
    appId: "REPLACE_ME",
    messagingSenderId: "REPLACE_ME",
    storageBucket: "REPLACE_ME",
  },
  appCheckSiteKey: "", // reCAPTCHA Enterprise site key. Configure before enabling lead submission.
  contactEmail: "", // Fill with an approved company email to show the contact link.
  contactWhatsApp: "", // E.164 digits, e.g. 5511999999999 (do not invent).
};

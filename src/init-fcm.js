import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "381220402916"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BOyk7CMbvYVAWJ68Er3bTxwpKuk7hR40nyM8RnGpTioky1OYMcMXd64BYUBG1zADxUE-sqQos0zDGFkZ5E52iXU"
);

export { messaging };

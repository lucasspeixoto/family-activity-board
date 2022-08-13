import { firebaseKeys } from '../../env';

export const environment = {
  production: true,
  firebase: {
    apiKey: firebaseKeys.apiKey,
    authDomain: firebaseKeys.authDomain,
    databaseURL: firebaseKeys.databaseURL,
    projectId: firebaseKeys.projectId,
    storageBucket: firebaseKeys.storageBucket,
    messagingSenderId: firebaseKeys.messagingSenderId,
    appId: firebaseKeys.appId,
    /*  measurementId: firebaseKeys.MEASUREMENT_ID */
  },
};

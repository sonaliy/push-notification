// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: true,
  firebase: {
      apiKey: "AIzaSyD-ZXELtQnp30dcTbF0sbuZQ_yiTN7ZDLg",
    authDomain: "keen-apogee-262607.firebaseapp.com",
    databaseURL: "https://keen-apogee-262607.firebaseio.com",
    projectId: "keen-apogee-262607",
    storageBucket: "keen-apogee-262607.appspot.com",
    messagingSenderId: "527717859678",
    appId: "1:527717859678:web:075a81a1198bb450924fcf",
    measurementId: "G-Y2JDE2HSXK"
  }
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDZlyvixJBqR8dgRh47eH5asofo-Z6frSo',
    authDomain: 'pwa-white-space.firebaseapp.com',
    databaseURL: 'https://pwa-white-space.firebaseio.com',
    projectId: 'pwa-white-space',
    storageBucket: 'pwa-white-space.appspot.com',
    messagingSenderId: '281280781534'
  }
};

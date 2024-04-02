import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';
// import { initializeApp } from 'firebase/app';
// import { provideFirebaseApp } from '@angular/fire/app';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(),
  //   importProvidersFrom([
  //     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  // ])
]
      
};

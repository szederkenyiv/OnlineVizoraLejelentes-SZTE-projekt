

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from './environments/environment'
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {provideAnimations} from "@angular/platform-browser/animations";
import { UpperCasePipe } from './shared/Pipes/Uppercase.pipe';
import {UppercasePipeModule} from "./shared/Pipes/UppercasePipeModule";
import {CommonModule} from "@angular/common";

export const appModule: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule),
    UppercasePipeModule,
    CommonModule

  ],

};

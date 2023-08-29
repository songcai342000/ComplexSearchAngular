import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InterceptorProviders } from './Services/interceptor-index';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PromptUpdateComponent } from './updateEvents/prompt-update/prompt-update.component';
import { LoginButtonComponent } from './account/login-button/login-button.component';
import { LogoutButtonComponent } from './account/logout-button/logout-button.component';
import { UserProfileComponent } from './account/user-profile/user-profile.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    CounterComponent,
    HomeComponent,
    FetchDataComponent,
    PromptUpdateComponent,
    AppComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    /*AuthModule.forRoot({
      domain: 'http://localhost:4200',
      clientId: 'PhrZVH0uIh8SL5pBghbmBTkgxbcZtm6d',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),*/
    //AccountModule,
    HttpClientModule,
    //ReactiveFormsModule,
    //FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule
  ],
  providers: [InterceptorProviders, provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }

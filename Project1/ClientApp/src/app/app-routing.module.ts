import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InterceptorProviders } from './Services/interceptor-index';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromptUpdateComponent } from './updateEvents/prompt-update/prompt-update.component';
import { LoginButtonComponent } from './account/login-button/login-button.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'login', component: LoginButtonComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search-dashboard', loadChildren: () => import('./search-dashboard/search-dashboard.module').then(m => m.SearchDashboardModule) },
  { path: 'update-confirmation', component: PromptUpdateComponent },
  { path: '**', component: PageNotFoundComponent },

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule]
})
export class AppRoutingModule { }

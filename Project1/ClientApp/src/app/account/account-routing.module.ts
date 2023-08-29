import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const accRoutes: Routes = [
  { path: 'login', component: LoginButtonComponent },
  { path: 'logout', component: LogoutButtonComponent },
  { path: 'profile', component: UserProfileComponent },
]
@NgModule({
  declarations: [LoginButtonComponent, LogoutButtonComponent, UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accRoutes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginWithMobileComponent } from './login-with-mobile/login-with-mobile.component';
import { LoginWithEmailComponent } from './login-with-email/login-with-email.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/email',
    pathMatch: 'full',
  },
  {
    path: 'login/email',
    component: LoginWithEmailComponent
  },
  {
    path: 'login/mobile',
    component: LoginWithMobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginWithDynamicFormModule } from 'login-with-dynamic-form';
import { LoginWithEmailComponent } from './login-with-email/login-with-email.component';
import { LoginWithMobileComponent } from './login-with-mobile/login-with-mobile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginWithEmailComponent,
    LoginWithMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    LoginWithDynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

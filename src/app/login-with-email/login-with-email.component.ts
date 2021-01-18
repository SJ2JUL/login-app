import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.scss']
})
export class LoginWithEmailComponent implements OnInit {
  public isLoginSuccess: boolean;
  public fieldList = [
    {
      name: "email",
      label: "Email",
      type: "text",
      value: '',
      validators: {
        required: true,
        email: true
      },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: '',
      validators: {
        required: true,
      },
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formDetails) {
    this.isLoginSuccess = formDetails.email === 'test@gmail.com' && formDetails.password === 'test';
  }

}

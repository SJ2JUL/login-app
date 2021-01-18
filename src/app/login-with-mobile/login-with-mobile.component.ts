import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-with-mobile',
  templateUrl: './login-with-mobile.component.html',
  styleUrls: ['./login-with-mobile.component.scss']
})
export class LoginWithMobileComponent implements OnInit {
  public isLoginSuccess: boolean;
  public fieldList = [
    {
      name: "mobile",
      label: "Mobile",
      type: "text",
      value: '',
      validators: {
        required: true,
        pattern: /^\d{10}$/
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
    console.log({ formDetails });
    this.isLoginSuccess = formDetails.mobile === '9876543210' && formDetails.password === 'test';
  }

}

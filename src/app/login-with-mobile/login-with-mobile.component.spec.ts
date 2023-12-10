import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginWithMobileComponent } from './login-with-mobile.component';

describe('LoginWithMobileComponent', () => {
  let component: LoginWithMobileComponent;
  let fixture: ComponentFixture<LoginWithMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

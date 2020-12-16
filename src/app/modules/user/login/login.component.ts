import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSandbox } from '../user.sandbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sandbox: UserSandbox,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['' ],
      password: [''],
    });
  }

  onSubmit() {
    this.sandbox.login(this.loginForm.controls["username"].value,this.loginForm.controls["password"].value);
  }

}

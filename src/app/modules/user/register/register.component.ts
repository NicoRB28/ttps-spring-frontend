import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUser } from 'src/app/model/createUser';
import { UserSandbox } from '../user.sandbox';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private sandbox: UserSandbox) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      mail:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      type:['',Validators.required],
    });
  }

  onSubmit():void {
    let newUser = new CreateUser();
    newUser.mail = this.registerForm.controls["mail"].value;
    newUser.password = this.registerForm.controls["password"].value;
    newUser.username = this.registerForm.controls["username"].value;
    newUser.type = this.registerForm.controls["type"].value;
    this.sandbox.register(newUser);

  }
}

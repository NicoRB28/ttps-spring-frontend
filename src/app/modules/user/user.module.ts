import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  //se declaran los componentes pertenecientes al modulo event
  declarations:[RegisterComponent,LoginComponent],
  imports:[
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';


@NgModule({
  //se declaran los componentes pertenecientes al modulo event
  declarations:[RegisterComponent,LoginComponent, EditComponent],
  imports:[
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[EditComponent]
})
export class UserModule {}

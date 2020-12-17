import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TruckFormComponent } from 'src/app/modules/truck/truck-form/truck-form.component';


@NgModule({
  //se declaran los componentes pertenecientes al modulo event
  declarations:[TruckFormComponent],
  imports:[
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[TruckFormComponent]
})
export class TruckerModule {}

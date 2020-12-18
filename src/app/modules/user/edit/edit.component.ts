import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input("user")
  user: User = new User();

  @Output()
  closeEvent: EventEmitter<void> = new EventEmitter();

  @Output()
  editSubmit: EventEmitter<User> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: [this.user.username],
      mail: [this.user.mail],
      password: [this.user.password],
    });
  }

  submitForm():void {
    const userEdited = new User();
    userEdited.id = this.user.id;
    userEdited.username = this.form.controls["username"].value;
    userEdited.mail = this.form.controls["mail"].value;
    userEdited.password = this.form.controls["password"].value;
    userEdited.isFoodTrucker = this.user.isFoodTrucker;
    this.editSubmit.emit(userEdited);
  }

  close():void{
    this.closeEvent.emit();
  }

}

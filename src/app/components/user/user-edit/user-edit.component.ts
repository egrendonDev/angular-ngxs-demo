// user-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUserAction } from '../../../state/user.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public angForm: FormGroup | undefined;

  constructor(private fb: FormBuilder,  private store: Store) {
    this.createForm();
  }

  public createForm(): void  {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
    });
  }

  public addUser(name: string, email: string): void {
    console.log(name, email);
    this.store.dispatch(new AddUserAction({ name, email}));
  }

  public ngOnInit(): void {
  }

}

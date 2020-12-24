import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../interfaces/state/user-state.interface';
import { Store } from '@ngxs/store';
import { NgForm } from '@angular/forms';
import { DeleteUserAction, UpdateUserAction } from '../../../state/user.actions';

@Component({
  selector: 'app-index',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users$: Observable<IUser[]>;
  selectedItem: IUser | undefined;
  isUpdateActivated = false;

  constructor(private store: Store) {
    this.users$ = this.store.select(state => state.users.users);
  }

  ngOnInit(): void {

  }

  deleteUser(id: string): void {
    this.store.dispatch(new DeleteUserAction(id));
  }

  showUpdateForm(user: IUser): void {
    this.selectedItem = {...user};
    this.isUpdateActivated = true;
  }


  updateUser(updateForm: NgForm): void {
    if (this.selectedItem) {
      this.store.dispatch(new UpdateUserAction(updateForm.value, this.selectedItem.id));

      this.isUpdateActivated = false;
      this.selectedItem = undefined;
    }
  }

}

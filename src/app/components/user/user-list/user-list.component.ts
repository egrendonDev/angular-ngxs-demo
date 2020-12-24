import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../interfaces/state/user-state.interface';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-index',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users$: Observable<IUser[]>;

  constructor(private store: Store) {
    this.users$ = this.store.select(state => state.users.users);
  }

  ngOnInit(): void {

  }

}

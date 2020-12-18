import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/state/User';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public users: Observable<User[]>;

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
  }

  ngOnInit(): void {

  }

}

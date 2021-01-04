import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState, Decrement, Increment } from '../../state/counter.state';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-counter-edit',
  templateUrl: './counter-edit.component.html',
  styleUrls: ['./counter-edit.component.scss']
})
export class CounterEditComponent implements OnInit {

  @Select(CounterState) counter$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }


  increment(): void {
    this.store.dispatch(new Increment());
  }

  decrement(): void {
    this.store.dispatch(new Decrement());
  }

}

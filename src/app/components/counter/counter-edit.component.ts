import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../../state/counter.state';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-counter-edit',
  templateUrl: './counter-edit.component.html',
  styleUrls: ['./counter-edit.component.scss']
})
export class CounterEditComponent implements OnInit {

  // @Select(CounterState) counter$: Observable<number>;

  constructor(public counter: CounterState) { }

  ngOnInit(): void {
  }


  increment(): void {
    // this.counter.dispatch(new Increment());
    this.counter.increment();
  }

  decrement(): void {
    // this.counter.dispatch(new Decrement());
    this.counter.decrement();
  }

}

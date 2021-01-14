import { State } from '@ngxs/store';
import { DataAction, Persistence, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Injectable } from '@angular/core';

// state with migration strategy
// state with migration strategy
@Persistence()
@StateRepository()
@State<number>({
    name: 'counter',
    defaults: 0
})
@Injectable()
export class CounterState extends NgxsDataRepository<number> {
    @DataAction() increment(): void {
        this.ctx.setState((state: number) => ++state);
    }

    @DataAction() decrement(): void {
        this.ctx.setState((state: number) => --state);
    }
}

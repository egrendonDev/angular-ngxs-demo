

import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { IUser } from '../interfaces/state/user-state-interface';
import { AddUserAction } from './user.actions';
import { Injectable } from '@angular/core';

export class UserStateModel {
    constructor(public users: IUser[]) {
    }
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
@Injectable()
export class UserState {


    constructor() {
        // we can inject - VehicleService
        // we can inject -  router: Router
        // empty for now
    }

    @Selector()
    static getUsers(state: UserStateModel): IUser[] {
        return state.users;
    }

    @Action(AddUserAction)
    add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUserAction): void {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }
}

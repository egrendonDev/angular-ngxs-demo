

import { State, Action, StateContext, Selector, NgxsOnInit, StateToken } from '@ngxs/store';
import { IUser } from '../interfaces/state/user-state.interface';
import { AddUserAction } from './user.actions';
import { Injectable } from '@angular/core';

const USERS_STATE_TOKEN = new StateToken<UserStateModel>('users');

export class UserStateModel {
    constructor(public users: IUser[]) {
    }
}

@State<UserStateModel>({
    name: USERS_STATE_TOKEN,
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

    @Selector([USERS_STATE_TOKEN])
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

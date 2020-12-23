

import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { IUser } from '../models/state/IUser';
import { AddUserAction } from './user.actions';

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
export class UserState {

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

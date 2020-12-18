

import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { User } from '../models/state/User';
import { AddUser } from './user.action';

export class UserStateModel {
    users: User[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UserState implements NgxsOnInit {

    @Selector()
    static getUsers(state: UserStateModel): User[] {
        return state.users;
    }

    @Action(AddUser)
    add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        debugger;
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }
}

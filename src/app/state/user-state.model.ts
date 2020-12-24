

import { State, Action, StateContext, Selector, NgxsOnInit, StateToken } from '@ngxs/store';
import { IUser } from '../interfaces/state/user-state.interface';
import { AddUserAction, DeleteUserAction, UpdateUserAction } from './user.actions';
import { Injectable } from '@angular/core';
import { DeleteCourseAction, UpdateCourseAction } from './course.actions';
import { CourseStateModel } from './course.state';

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

    @Action(DeleteUserAction)
    deleteCourse({getState, setState}: StateContext<UserStateModel>, {id}: DeleteUserAction): void {
        const state = getState();
        const filteredArray = state.users.filter(item => item.id !== id);
        setState({
            ...state,
            users: filteredArray,
        });
    }

    @Action(UpdateCourseAction)
    updateCourse({getState, setState}: StateContext<UserStateModel>, {payload, id}: UpdateUserAction): void {

        const state = getState();
        const userList = [...state.users];
        const itemIndex = userList.findIndex(item => item.id === id);
        userList[itemIndex] = payload;

        setState({
            ...state,
            users: userList,
        });
    }
}

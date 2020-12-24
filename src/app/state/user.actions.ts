// user.actions.ts

import { IUser } from '../interfaces/state/IUser';

export class AddUserAction {
    static readonly type = '[IUser] Add';

    constructor(public payload: IUser) {}
}

export class GetUsersAction {
    static readonly type = '[IUser] Get';
}

export class UpdateUserAction {
    static readonly type = '[IUser] Update';

    constructor(public payload: IUser, public id: string) {
    }
}

export class DeleteUserAction {
    static readonly type = '[IUser] Delete';

    constructor(public id: string) {
    }
}

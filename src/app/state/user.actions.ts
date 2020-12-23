// user.actions.ts

import { IUser } from '../models/state/IUser';

export class AddUser {
    static readonly type = '[IUser] Add';

    constructor(public payload: IUser) {}
}

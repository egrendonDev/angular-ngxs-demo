// user.actions.ts

import { IUser } from '../models/state/IUser';

export class AddUserAction {
    static readonly type = '[IUser] Add';

    constructor(public payload: IUser) {}
}

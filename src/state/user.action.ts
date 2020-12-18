// user.action.ts

import { User } from '../models/state/User';

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}

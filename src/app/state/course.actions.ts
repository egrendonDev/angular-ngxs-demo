import { ICourse } from '../interfaces/state/course-state.interface';


export class AddCourseAction {
  static readonly type = '[ICourse ] Add';

  constructor(public payload: ICourse ) {
  }
}

export class GetCoursesAction {
  static readonly type = '[ICourse] Get';
}

export class UpdateCourseAction {
  static readonly type = '[ICourse] Update';

  constructor(public payload: ICourse, public id: string) {
  }
}

export class DeleteCourseAction {
  static readonly type = '[ICourse] Delete';

  constructor(public id: string) {
  }
}

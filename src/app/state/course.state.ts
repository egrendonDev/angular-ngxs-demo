import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ICourse } from '../models/state/course.model';
import { AddCourseAction, UpdateCourseAction, GetCoursesAction, DeleteCourseAction } from './course.actions';
import { Injectable } from '@angular/core';

export class CourseStateModel {
    courses: ICourse[] = [];
    areCoursesLoaded = false;
}

@State<CourseStateModel>({
    name: 'courses',
    defaults: {
      courses: [],
      areCoursesLoaded: false
    }
})
@Injectable()
export class CourseState {

    constructor() {
    }

    @Selector()
    static getCoursesList(state: CourseStateModel): ICourse[] {
        return state.courses;
    }

    @Selector()
    static areCoursesLoaded(state: CourseStateModel): boolean {
        return state.areCoursesLoaded;
    }

    @Action(GetCoursesAction)
    getCourses({getState, setState}: StateContext<CourseStateModel>): void {

        const state = getState();
        setState({
            ...state,
            courses: state.courses,
            areCoursesLoaded: true
        });


      // return this.courseService.getAllCourses().pipe(
      //   tap(result => {
      //     const state = getState();
      //     setState({
      //       ...state,
      //       courses: result,
      //       areCoursesLoaded: true
      //     });
      //   })
      // );
    }

    @Action(DeleteCourseAction)
    deleteCourse({getState, setState}: StateContext<CourseStateModel>, {id}: DeleteCourseAction): void {
        const state = getState();
        const filteredArray = state.courses.filter(item => item.id !== id);
        setState({
            ...state,
            courses: filteredArray,
        });

      // return this.courseService.deleteCourse(id).pipe(
      //   tap(result => {
      //     const state = getState();
      //     const filteredArray = state.courses.filter(item => item.id !== id);
      //     setState({
      //       ...state,
      //       courses: filteredArray,
      //     });
      //   })
      // );
    }

    @Action(UpdateCourseAction)
    updateCourse({getState, setState}: StateContext<CourseStateModel>, {payload, id}: UpdateCourseAction): void {

            const state = getState();
            const coursesList = [...state.courses];
            const courseIndex = coursesList.findIndex(item => item.id === id);
            coursesList[courseIndex] = payload;

            setState({
                ...state,
                courses: coursesList,
            });

      // return this.courseService.updateCourse(id, payload).pipe(
      //   tap(result => {
      //     const state = getState();
      //     const coursesList = [...state.courses];
      //     const courseIndex = coursesList.findIndex(item => item.id === id);
      //     coursesList[courseIndex] = result;
      //
      //     setState({
      //       ...state,
      //       courses: coursesList,
      //     });
      //   })
      // );
    }

    @Action(AddCourseAction)
    addTodo({getState, patchState}: StateContext<CourseStateModel>, {payload}: AddCourseAction): void {

        const state = getState();
        patchState({
            courses: [...state.courses, payload]
        });

        // this.router.navigateByUrl('/courses');

        // return this.courseService.createCourse(payload).pipe(tap((result) => {
        //     const state = getState();
        //     patchState({
        //         courses: [...state.courses, result]
        //     });
        //     this.router.navigateByUrl('/courses');
        // }));
    }
}

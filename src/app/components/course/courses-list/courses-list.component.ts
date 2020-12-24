import { takeUntil, tap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { CourseState } from '../../../state/course.state';
import { ICourse } from '../../../interfaces/state/course-state.interface';
import { DeleteCourseAction, GetCoursesAction, UpdateCourseAction } from '../../../state/course.actions';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit, OnDestroy {

  @Select(CourseState.getCoursesList) courses$: Observable<ICourse[]> | undefined;

  @Select(CourseState.areCoursesLoaded) areCoursesLoaded$: Observable<boolean> | undefined;

  selectedCourseItem: ICourse | undefined;

  isUpdateActivated = false;

  public subscribeKiller = new Subject<void>();

  constructor(private store: Store) {
   // debugger;
   // this.initLoadListFromStore();
  }

  ngOnInit(): void {
    // debugger;
    this.initLoadListFromStore();
  }

  private initLoadListFromStore(): void {
    if (this.areCoursesLoaded$) {
      this.areCoursesLoaded$.pipe(
          tap((areCoursesLoaded) => {
            if (!areCoursesLoaded) {
              console.log('******************* Yoooooooo******************* Yoooooooo******************* Yoooooooo *******************');
              this.store.dispatch(new GetCoursesAction());
            }
          })
      ).pipe(takeUntil(this.subscribeKiller)).subscribe((value: any) => {
        console.log('method initLoadListFromStore called for CoursesListComponent' + value);
      });
    }
  }

  // Fired when a view is going to be completely removed
  public ngOnDestroy(): void {
    this.subscribeKiller.next();
    this.subscribeKiller.complete();
  }

  deleteCourse(courseId: string): void {
    this.store.dispatch(new DeleteCourseAction(courseId));
  }

  showUpdateForm(course: ICourse): void {
    this.selectedCourseItem = {...course};
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm: NgForm): void {
    if (this.selectedCourseItem) {
      this.store.dispatch(new UpdateCourseAction(updateForm.value, this.selectedCourseItem.id));

      this.isUpdateActivated = false;
      this.selectedCourseItem = undefined;
    }
  }
}

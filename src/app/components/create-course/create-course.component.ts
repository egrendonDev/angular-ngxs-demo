
import { Component, NgZone, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { ICourse } from '../../models/state/course.model';
import { AddCourseAction } from '../../state/course.actions';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit {


  constructor(private store: Store, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void  {
  }


  onSubmit(submittedForm: { value: { name: any; description: any; }; invalid: any; }): void {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const course: ICourse = {id: uuidv4(), name: submittedForm.value.name, description: submittedForm.value.description};
    this.store.dispatch(new AddCourseAction(course));

    // have to do ngZone for this step....
    this.ngZone.run(() => this.router.navigateByUrl('/courses'));
  }

}

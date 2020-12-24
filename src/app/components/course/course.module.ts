import { CoursesListComponent } from './courses-list/courses-list.component';
import { CreateCourseComponent } from '../deleteMe/create-course/create-course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CoursesListComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [CourseService],
  exports: [CoursesListComponent, CreateCourseComponent]
})
export class CourseModule { }

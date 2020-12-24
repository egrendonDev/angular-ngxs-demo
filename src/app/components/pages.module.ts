import { CoursesListComponent } from './course/courses-list/courses-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './deleteMe/create/create.component';
import { IndexComponent } from './deleteMe/index/index.component';

const components = [CoursesListComponent, CreateCourseComponent, CreateComponent, IndexComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  // providers: [CourseService],
  exports: [...components]
})
export class PagesModule { }

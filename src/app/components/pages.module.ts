import { CoursesListComponent } from './course/courses-list/courses-list.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';

const components = [CoursesListComponent, CourseEditComponent, UserEditComponent, UserListComponent];

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

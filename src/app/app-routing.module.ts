import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './components/course/courses-list/courses-list.component';
import { CreateCourseComponent } from './components/course/create-course/create-course.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

const routes = [
  { path: 'courses', component: CoursesListComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'users', component: UserListComponent},
  {path: 'create-user', component: UserEditComponent},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

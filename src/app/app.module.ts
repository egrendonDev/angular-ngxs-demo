import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { CreateComponent } from './components/course/create/create.component';
import { IndexComponent } from './components/deleteMe/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserState } from './state/user-state.model';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { CourseModule } from './components/course/course.module';
import { CourseState } from './state/course.state';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      UserState,
      CourseState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(), // THis PLug what stores into local storage
    ReactiveFormsModule,
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

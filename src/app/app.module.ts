import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user-state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { PagesModule } from './components/pages.module';
import { CourseState } from './state/course.state';
import { NGX_STATES } from './state/state.index';
import { NgxsDataPluginModule } from '@ngxs-labs/data';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(...[NGX_STATES]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsDataPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(), // THis PLug what stores into local storage
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

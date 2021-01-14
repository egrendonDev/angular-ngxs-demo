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
import { NGXS_DATA_STORAGE_PLUGIN, NGXS_DATA_STORAGE_PREFIX_TOKEN } from '@ngxs-labs/data/storage';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(...[NGX_STATES]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsDataPluginModule.forRoot([NGXS_DATA_STORAGE_PLUGIN]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(), // THis PLug what stores into local storage
    PagesModule,
  ],
  providers: [{ provide: NGXS_DATA_STORAGE_PREFIX_TOKEN, useValue: '@myCompany.store.' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BadgeComponent} from './badge/badge.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ActiveTaskPipe} from './shared/pipes/active-task.pipe';
import {TasksComponent} from './tasks/tasks.component';
import {ZoomDirective} from './shared/directives/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BadgeComponent,
    MainComponent,
    AboutComponent,
    ContactsComponent,
    ActiveTaskPipe,
    TasksComponent,
    ZoomDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full'
      },
    ]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

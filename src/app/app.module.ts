import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryEditComponent } from './diary-edit/diary-edit.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { MainPageComponent } from './main-page/main-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DiaryListComponent,
    DiaryEditComponent,
    DiaryFormComponent,
    MainPageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

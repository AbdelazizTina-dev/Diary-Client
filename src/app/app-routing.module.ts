import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DiaryEditComponent } from './diary-edit/diary-edit.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "diaries",
    component: DiaryListComponent,
  },
  {
    path: "diaries/new",
    component: DiaryEditComponent,
  },
  {
    path: "diaries/:id/edit",
    component: DiaryEditComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

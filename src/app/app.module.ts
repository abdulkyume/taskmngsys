import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { TaskdoneComponent } from './components/taskdone/taskdone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormmodalComponent } from './components/formmodal/formmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InprogressComponent,
    TaskdoneComponent,
    FormmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

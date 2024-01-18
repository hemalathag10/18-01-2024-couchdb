// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowListComponent } from './book/show-list.component';
import { AddBookComponent } from './book/add-book.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

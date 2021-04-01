import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { GifDisplayComponent } from './components/gif-display/gif-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent,
    PageNotFoundComponent,
    GifSearchComponent,
    GifDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

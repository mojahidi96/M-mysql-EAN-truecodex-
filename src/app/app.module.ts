import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layout/backend-layout/backend-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MessageComponent,
    PageNotFoundComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

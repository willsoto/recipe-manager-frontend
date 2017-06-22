import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, RequestOptions } from '@angular/http';
import { MaterialModule, MdSidenavModule, MdToolbarModule, MdListModule } from '@angular/material';

import { AppRequestOptions } from './common/api/api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './common/menu/menu.component';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    BookmarksModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: RequestOptions,
      useClass: AppRequestOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

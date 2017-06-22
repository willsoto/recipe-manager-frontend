import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { ListComponent } from './list/list.component';
import { BookmarkService } from './bookmark.service';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [CommonModule, BookmarksRoutingModule],
  declarations: [ListComponent, CreateComponent],
  providers: [BookmarkService]
})
export class BookmarksModule {}

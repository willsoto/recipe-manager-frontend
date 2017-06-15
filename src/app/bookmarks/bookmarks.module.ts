import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkService } from './bookmark.service';

@NgModule({
  imports: [CommonModule, BookmarksRoutingModule],
  declarations: [BookmarkListComponent],
  providers: [BookmarkService]
})
export class BookmarksModule {}

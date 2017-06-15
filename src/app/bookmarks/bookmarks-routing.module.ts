import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarkListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule {}

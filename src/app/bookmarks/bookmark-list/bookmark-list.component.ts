import { Component, OnInit } from '@angular/core';

import { Bookmark } from '../bookmark';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  bookmarks: Bookmark[];
  errorMessage: string;

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.bookmarkService.getAll().subscribe(bookmarks => {
      this.bookmarks = bookmarks;
    }, error => (this.errorMessage = <any>error));
  }
}

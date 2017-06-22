import { Component, OnInit } from '@angular/core';

import { Bookmark } from '../bookmark';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookmarks: Bookmark[];
  errorMessage: string;

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.bookmarkService.getAll().subscribe(bookmarks => {
      this.bookmarks = bookmarks;
    }, error => (this.errorMessage = <any>error));
  }
}

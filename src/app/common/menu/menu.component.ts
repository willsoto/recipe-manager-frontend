import { Component, OnInit } from '@angular/core';

interface Bookmark {
  href: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Bookmark[];

  constructor() {
    this.items = [
      {
        href: '/bookmarks',
        name: 'Bookmarks'
      }
    ];
  }

  ngOnInit() {}
}

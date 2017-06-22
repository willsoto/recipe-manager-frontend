import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApiService } from '../common/api/api.service';

import { Bookmark } from './bookmark';

@Injectable()
export class BookmarkService extends BaseApiService {
  getAll(): Observable<Bookmark[]> {
    return this.http.get('/bookmarks').map(this.extractData).catch(this.handleError);
  }
}

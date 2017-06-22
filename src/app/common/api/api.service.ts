import { Injectable } from '@angular/core';
import { Http, Response, BaseRequestOptions, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppRequestOptions extends BaseRequestOptions {
  headers = new Headers({
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json'
  });

  merge(options?: RequestOptionsArgs): RequestOptions {
    options.url = `/api/v1/${options.url}`;

    return super.merge(options);
  }
}

@Injectable()
export class BaseApiService {
  constructor(public http: Http) {}

  public extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  public handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

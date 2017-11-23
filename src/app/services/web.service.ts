import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class WebService {

  constructor(public http: Http, private authHttp: AuthHttp) {


  }


  get(user: Object, url) {
    return this.http.get(url, user)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  post(data: Object, url) {
    return this.http.post(url, data)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  postWithJWT(data: Object, url) {
    return this.http.post(url, data)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      return body.message;
    }
  }
}

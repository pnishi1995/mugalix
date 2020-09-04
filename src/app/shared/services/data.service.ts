import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  headers;
  constructor(
    private _http: HttpClient,
    private _commonService: CommonService
  ) {
    this.setHttpHeaders();
  }

  setHttpHeaders() {
    const token = this._commonService.token;
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', 'Bearer ' + token);
  }

  post(url, data) {
    // this.setHttpHeaders();
    return this._http.post(url, { ...data }, { headers: this.headers });
  }

  get(url) {
    // this.setHttpHeaders();
    return this._http.get(url, { headers: this.headers });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    headers;
    constructor (private _http: HttpClient) {
        this.setHttpHeaders()
    }

    setHttpHeaders() {
        this.headers = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjI2ODlhNGRjYjIzZjZhYjA0NWM4NjAiLCJpYXQiOjE1OTcxMjU2NzJ9.XrnnJmGwwjBI9pM3JJ2GsrSh62gccoJGhvaZPsdBn_c');
    }

    post(url, data) {
        return this._http.post(url, {...data},{ headers: this.headers });
    }

    get(url) {
        return this._http.get(url,{ headers: this.headers });
    }
}
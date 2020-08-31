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
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRiMGE4NmEzZmQyZjQ3Y2U1NTBmMWMiLCJpYXQiOjE1OTg3NTU1MDl9.ijUJsANRo-OyxjfRjCAW5CaHTi8IBSYIQlKgRxxvZB8');
    }

    post(url, data) {
        return this._http.post(url, {...data},{ headers: this.headers });
    }

    get(url) {
        return this._http.get(url,{ headers: this.headers });
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../Models/appConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  oauth = 'https://oauth.reddit.com/api';
  base = 'https://reddit.com';
  _appConfig: AppConfig = { appId: '', appSecret: '', userAgent: '' };
  constructor(private http: HttpClient) {}

  launch(appConfig: AppConfig) {
    this._appConfig = appConfig;
  }

  login(username: string, password: string) {
    return this.http.post('https://www.reddit.com/api', {
      auth: { username: username, password: password },
    });
  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.base}/${url}`);
  }

  post(url: string, payload: any): Observable<any> {
    return this.http.post(`${this.base}/${url}`, payload);
  }

  put(url: string, payload: any): Observable<any> {
    return this.http.put(`${this.base}/${url}`, payload);
  }

  delete(url: string, payload: any): Observable<any> {
    return this.http.delete(`${this.base}/${url}`, payload);
  }
}

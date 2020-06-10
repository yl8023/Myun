import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  post = (url: string, params?: {}, headers?: {}): Observable<any> => {

    return new Observable<any>(observe => {

      let reqHeaders = new HttpHeaders();

      let withCredentials = true;

      for (const key of Object.keys(params)) {
        if (params.hasOwnProperty(key) && typeof params[key]  === 'object') {
          params[key] = JSON.stringify(params[key]);
          // encodeURIComponent
        }
      }

      this.httpClient.post(url, null, { headers: reqHeaders, params, withCredentials })
        .subscribe(result => {
          observe.next(result);
          observe.complete();
          observe.unsubscribe();
        }, error => {
          observe.error(error);
          observe.unsubscribe();
        });

    });
  }
  get = (url: string, params?: {}): Observable<any> => {

    return new Observable<any>(observe => {

      let reqHeaders = new HttpHeaders();
      let withCredentials = true;
     

      this.httpClient.get(url, { headers: reqHeaders, params, withCredentials }).subscribe(result => {
        observe.next(result);
        observe.complete();
        observe.unsubscribe();
      }, error => {
        observe.error(error);
        observe.unsubscribe();
      });

    });
  }
}

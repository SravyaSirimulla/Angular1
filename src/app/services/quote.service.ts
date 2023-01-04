import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getDSAQuote(quoteId : string) : Observable<any> {
    return this.http.get<any>(environment.baseUri + "/Quote/dsa/" + quoteId);
  }

  getDFNQuote(quoteId : string) : Observable<any> {
    return this.http.get<any>(environment.baseUri + "/Quote/dfn/" + quoteId);
  }

}

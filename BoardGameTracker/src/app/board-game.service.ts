import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardGameService {
  private baseUrl = 'https://api.boardgameatlas.com';
  
  constructor(private http: HttpClient) { }
  searchGames(query: string): Observable<any> {
    const url = `${this.baseUrl}/api/search`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
                                     
    
    const params = new HttpParams().set('name', query)
                                   .set('order_by', 'rank')
                                   .set('ascending', 'false')
                                   .set('client_id', environment.apiKey);

    return this.http.get(url, { params, headers });
  }

  getGameDetails(id: string): Observable<any> {
    const url = `${this.baseUrl}/api/search`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('ids', id)
                                    .set('client_id', environment.apiKey);

    return this.http.get(url, { params, headers });
                                      
  }

  getHighestRankedGames(): Observable<any> {
    const url = `${this.baseUrl}/api/search`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('order_by', 'rank')
                                   .set('ascending', 'false')
                                   .set('limit', '3')
                                    .set('client_id', environment.apiKey);
    return this.http.get(url, { params, headers });
  }

}

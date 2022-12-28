import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {
  private url='https://newsapi.org/v2/top-headlines?country=co&category=';
  //science&apiKey=
  private apikey='6a6ce4e66a424fb1a9443429f7a04160'
  constructor(private http: HttpClient) { }

  getCategoria(category):Observable<any>{
    return this.http.get(this.url + category + '&apiKey=' + this.apikey);
  }


}

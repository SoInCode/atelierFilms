import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  http: HttpClient = inject(HttpClient);
  url: string = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
  
  
  constructor() { }

  getFilms(): Observable<any> {
    return this.http.get(this.url).pipe(map(
      (data: any) => {
        return data;
      })
    )
  }
}

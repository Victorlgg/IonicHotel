import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

   getHotels(fecha: string):Observable<any>{
     console.log(fecha);
     return this.http.get<any>(
       `${environment.apiUrl}hoteles.php?fecha=${fecha}`,

     );
   }

   postHotel(id):Observable<any>{
    return this.http.post<any>(
      `${environment.apiUrl}/categorias.php`,
      id, this.httpOptions
      
    );
  }

  getHotel(id: number):Observable<any>{
    return this.http.get<any>(
      `${environment.apiUrl}hoteles.php/?id=${id}`,

    );
  }

}

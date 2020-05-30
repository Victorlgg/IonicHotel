import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

   getHotel():Observable<any>{
     return this.http.get<any>(
       `${environment.apiUrl}/hoteles.php`,

     );
   }

   postHotel(id):Observable<any>{
    return this.http.post<any>(
      `${environment.apiUrl}/categorias.php`,
      id
      
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {
  private apiUrl = 'http://localhost:3002/api/promociones'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  getPromociones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPromocion(promocion: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, promocion);
  }

  updatePromocion(id: number, promocion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, promocion);
  }

  deletePromocion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

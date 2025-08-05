import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = 'http://localhost:3333/auth/login'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  login(datos: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }
}

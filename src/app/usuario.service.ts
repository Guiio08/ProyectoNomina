import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://localhost:44397/api/';

  constructor(private http: HttpClient) { }

  public login(userData : any) {
    var serviceOperation = this.url + 'Usuario';
    return this.http.post<boolean>(serviceOperation, userData);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUrl = 'http://localhost:8081/user/login';
  private registerUrl = 'http://localhost:8081/user/register-form';

  constructor(private http: HttpClient) { }

  login(id: number, value: any): Observable<any> {
    return this.http.get(`${this.loginUrl}/${id}`, value);
  }

  register(data: any): Observable<any> {
    console.log("data is : ", data);
    return this.http.post(this.registerUrl, data);
  }

}

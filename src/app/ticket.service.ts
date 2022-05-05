import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ticketService {

  private baseUrl = 'http://localhost:8081/api';
  private deleteUrl = 'http://localhost:8081/api/delete';
  private updateUrl = 'http://localhost:8081/api/update';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log("data is : ", data)
    return this.http.post("http://localhost:8081/api/create", data);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateUrl}/${id}`, value);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${id}`, { responseType: 'text' });
  }

  getList(): Observable<any> {
    return this.http.get("http://localhost:8081/api/getAll");
  }
}

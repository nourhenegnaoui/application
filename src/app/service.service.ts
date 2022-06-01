import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'https://localhost:8081/api';

  constructor(private http: HttpClient) { }

  getTicket(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(ticket: Object): Observable<Object> {
    return this.http.post("https://localhost:8081/api/create", ticket);
  }

  updateTicket(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTicketsList(): Observable<any> {
    return this.http.get('https://localhost:8081/api/getAll');
  } 
}

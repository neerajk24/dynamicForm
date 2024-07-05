import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Ensures service is provided at the root level
})
export class FormService {
  constructor(private http: HttpClient) {}

  getFormSchema(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }
}

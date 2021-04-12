import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserSeviceService {
  baseUrL: any="https://data.football-api.com/v3/competitions?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b"
  constructor(private http:HttpClient) { }
  getUserlist(): Observable<User>
  {
    return this.http.get<User>(this.baseUrL);
  }
}

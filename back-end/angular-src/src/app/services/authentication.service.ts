import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, TokenPayload, TokenResponse } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');

  }

  public getUserDetails(): User {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);

      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn (): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 10000;

    } else {
      return false;
    }
  }

  // register(user: TokenPayload): Observable<any> {
  //   console.log('going to register');
  //   return this.http.post(`http://localhost:3000/user/signup/`, user);
  // }


  private request (method: 'post'|'get'|'put', type: 'signin'|'signup'|'reset'|'profile',
                  user?: TokenPayload): Observable<any> {
    let base;
    if (method === 'post') {
      base = this.http.post(`user/${type}` , user);
    } else if (method === 'put') {
      base = this.http.post(`user/${type}` , user);
    } else {
      base = this.http.get(`user/${type}`, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post' , 'signup' , user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'signin' , user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public reset(user: TokenPayload): Observable<any> {
    return this.request('put', 'reset' , user);
  }

  public confirmation(token: string): Observable<any> {
    const base = this.http.get(`user/activate/${token}`);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
      );
      return request;
  }
}



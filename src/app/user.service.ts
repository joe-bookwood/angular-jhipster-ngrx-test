import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './model/user.model';


export type EntityResponseType = HttpResponse<IUser>;
export type EntityArrayResponseType = HttpResponse<IUser[]>;

@Injectable()
export class UserService {
  private resourceUrl: String;

  constructor(protected http: HttpClient) {
    this.resourceUrl = 'https://jsonplaceholder.typicode.com/users/';
  }

  // JHipsters find
  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUser>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }


}

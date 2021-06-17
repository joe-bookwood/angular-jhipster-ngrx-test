import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, switchMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import {  UserService } from '../../user.service';
import { HttpResponse } from '@angular/common/http';
import { loadUser, userIsLoaded } from './user.actions';
import { IUser } from '../../model/user.model';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(loadUser),
      concatMap(({payload}) => {
        return this.userService.find(payload).pipe(
          map((resp: HttpResponse<IUser>) => {
            let receivedUser: IUser = resp.body??undefined;
            return userIsLoaded({payload: { user: receivedUser } })
          })
        )
      })  
    )
  })

  constructor(private actions$: Actions, private userService: UserService) {}

}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as UserActions from './user.actions';
import { UserService } from '../../user.service';


@Injectable()
export class UserEffects {
 
  constructor(private actions$: Actions, private userService: UserService) {}


  loadUsers$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UserActions.loadUser),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      switchMap(({payload}) => {
        return this.userService.find(payload).pipe(
          switchMap((response) => {
            const { data } 
          })
        )
}  
}



}

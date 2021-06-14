import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../../model/user.model';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  user: IUser | undefined
}

export const initialState: State = {
  user: undefined
};


export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),

);


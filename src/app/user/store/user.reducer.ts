import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../../model/user.model';
import { userIsLoaded } from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  user: IUser | undefined
}

export const initialState: State = {
  user: undefined
};


export const reducer = createReducer(
  initialState,

  on(userIsLoaded, (state, {payload}) => ({
    ...state,
    user: payload
  }))

);


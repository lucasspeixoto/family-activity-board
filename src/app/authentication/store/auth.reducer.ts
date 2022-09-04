import { Action, createReducer, on } from '@ngrx/store';
import {
  Logout,
  SetUserData,
  Signup,
  UpdateIsLoggedStatus,
} from './auth.actions';

import { User } from '@authMd/user.model';

export interface AuthState {
  user: User | undefined;
  isLogged: boolean;
}

const initialState: AuthState = {
  user: {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    emailVerified: false,
  },
  isLogged: false,
};

const _authReducer = createReducer(
  initialState,
  on(Signup, (_state, { payload }) => {
    return Object.assign({}, _state, {
      user: payload,
      isLogged: _state.isLogged,
    });
  }),
  on(UpdateIsLoggedStatus, (_state, { payload }) => {
    return Object.assign({}, _state, {
      user: _state.user,
      isLogged: payload,
    });
  }),
  on(SetUserData, (_state, { payload }) => {
    return Object.assign({}, _state, {
      user: payload,
      isLogged: _state.isLogged,
    });
  }),
  on(Logout, _state => {
    return Object.assign({}, _state, initialState);
  })
);

export const authReducer = (state: AuthState | undefined, action: Action) =>
  _authReducer(state, action);

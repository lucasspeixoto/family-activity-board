import { createAction, props } from '@ngrx/store';
import { User } from '../models/authentication.model';

export const signup = createAction(
  '[SignUp Page] User Signup',
  props<{ user: User }>()
);

export const logout = createAction('[Top Menu] Logout');

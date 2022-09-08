import { createAction, props } from '@ngrx/store';

import { LoginForm } from '@authMd/login-form.model';
import { SignUpForm } from '@authMd/signup-form.model';
import { User } from '@authMd/user.model';

export enum AuthActions {
  SIGNUP = '[SignUp Page] User Signup',
  EMAIL_VERIFICATION = '[AuthEffects] Send User E-mail verification',
  LOGOUT = '[Header] Logout user',
  UPDATE_PROFILE = '[AuthEffects] Update Firebase User displayName',
  SET_NEW_USER_DATA = '[AuthEffects] Inser new User in Firestore Database',
  UPDATE_IS_LOGGED_STATUS = '[App Component] Update auth isLogged status',
  SET_USER_DATA = '[App Component] Set auth user status',
  LOGIN = '[Login Page] User Login',
  FORGOT_PASSWORD = '[Forgot Password Page] Send user E-mail for change password',
  LOAD_USER = '[App Component] Load logged user',
  LOAD_USER_SUCCESS = '[App Component] Load logged user Success',
}

export const Login = createAction(
  AuthActions.LOGIN,
  props<{ payload: LoginForm }>()
);

export const Signup = createAction(
  AuthActions.SIGNUP,
  props<{ payload: SignUpForm }>()
);

export const SendEmailVerification = createAction(
  AuthActions.EMAIL_VERIFICATION
);

export const UpdateProfile = createAction(
  AuthActions.UPDATE_PROFILE,
  props<{ payload: User }>()
);

export const SetNewUserData = createAction(
  AuthActions.SET_NEW_USER_DATA,
  props<{ payload: User }>()
);

export const UpdateIsLoggedStatus = createAction(
  AuthActions.UPDATE_IS_LOGGED_STATUS,
  props<{ payload: boolean }>()
);

export const SetUserData = createAction(
  AuthActions.SET_USER_DATA,
  props<{ payload: User | null }>()
);

export const Logout = createAction(AuthActions.LOGOUT);

export const ForgotPassword = createAction(
  AuthActions.FORGOT_PASSWORD,
  props<{ payload: string }>()
);

export const LoadUser = createAction(AuthActions.LOAD_USER);

export const LoadUserSuccess = createAction(AuthActions.LOAD_USER_SUCCESS);

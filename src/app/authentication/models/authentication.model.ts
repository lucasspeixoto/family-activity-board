export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string;
  emailVerified: boolean;
}

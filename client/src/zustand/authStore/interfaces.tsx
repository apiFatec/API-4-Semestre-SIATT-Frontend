export interface AuthFields{
  email: string;
  password: string;
}

export interface State {
  fields: AuthFields;
  isLoading: boolean;
}
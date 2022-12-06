export interface CreateUserRequestModel {
  name: string;
  email: string;
  password: string;
  confirmPass?: string;
}

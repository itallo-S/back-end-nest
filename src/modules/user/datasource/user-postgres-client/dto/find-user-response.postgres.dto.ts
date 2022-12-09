export interface FindUserResponsePostgresDTO {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date | string;
}

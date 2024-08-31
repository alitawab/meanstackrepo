export interface User {
  _id: string;
  username: string;
  email: string;
  exp: number;
  iat: number;
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  username: string;
  email: string;
  password: string;
}



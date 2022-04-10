import {Token} from '../services/token';

export type AuthData = {
  login: string,
  password: string,
}

export type UserData = {
  avatarUrl?: string,
  email: string,
  id: number,
  isPro?: boolean,
  name: string,
  token: Token
}

export type UserServerData = {
  avatar_url?: string,
  email: string,
  id: number,
  is_pro?: boolean,
  name: string,
  token: Token
}

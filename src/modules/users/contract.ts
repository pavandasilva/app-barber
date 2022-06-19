import { Erro } from '../../interfaces/erros'
import { User } from '../../interfaces/users'

export interface RegisterFormUsuarios {
  nameInput: string,
  emailInput: string,
  passInput: string,
  cadastrar_usuario: boolean
}

export interface LoginFormUsuarios {
  emailInput: string,
  passInput: string
}

export interface LoginUser {
  email: string,
  password: string
}

export interface PostUsersResponse {
  status: number,
  erro: Erro
}

export interface PostRegisterUsersService {
  handle: (params: User) => Promise<PostUsersResponse>
}

export interface PostLoginUsersService {
  handle: (params: LoginUser) => Promise<PostUsersResponse>
}

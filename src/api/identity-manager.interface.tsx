export interface LoginRequest {
  email: string
  password: string
}

export type LoginMethod = 'password'

export interface LoginToken {
  methods: LoginMethod[]
  expires_at: string
}

export interface IDMAuthorizationConfig {
  level: 'basic'
  authzforce: boolean
}

export interface LoginResponse {
  token: LoginToken
  idm_authorization_config: IDMAuthorizationConfig
}

import { type LoginResponse } from './identity-manager.interface'

const API_URL = 'http://orion-ld.ruzafa.me:3000/v1'

export const login = async (email: string, password: string): Promise<LoginResponse | null> => {
  return await fetch(`${API_URL}/auth/tokens`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: email, password }),
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json() as LoginResponse
  }).catch((error) => {
    console.log(error)
    return null
  },
  )
}

import { useAppSelector } from './hooks'

interface IAuthUser {
  isAuth: boolean | null
  email: string | null
  token: string | null
  id: string | null
}

export function useAuth (): IAuthUser {
  const { email, token, id } = useAppSelector(state => state.user)

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}

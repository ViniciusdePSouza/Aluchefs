import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { LoggedInUserProps } from "../@types/loginUser";

interface AuthContextType {
  user: LoggedInUserProps;
  signIn: ({ identifier, password }: LogInProps) => void
  signOut: () => void
}

export interface AuthResponse {
    user: LoggedInUserProps;
    jwt: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export interface LogInProps {
    identifier: string
    password: string
}

export const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState({} as AuthResponse)

    async function signIn({identifier, password}: LogInProps) {
        const response = await api.post<AuthResponse>('/api/auth/local', {identifier, password})
        const { user, jwt } = response.data

        localStorage.setItem('@aluchef:user', JSON.stringify(user))
        localStorage.setItem('@aluchef:token', jwt)

        api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

        setData({ user, jwt })
    }

    function signOut() {
        localStorage.removeItem('@aluchef:token')
        localStorage.removeItem('@aluchef:user')

        setData({} as AuthResponse)
    }

  return (
    <AuthContext.Provider value={{ user: data.user,  signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
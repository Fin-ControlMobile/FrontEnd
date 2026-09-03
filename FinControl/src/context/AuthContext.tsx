import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextData, Login, Usuario, UsuarioPayload } from "../@types/autenticacao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { autenticacaoService } from "../services/auth/autenticacaoService";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode"

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function decodificarToken(token: string) : Usuario  | null {
    try {
        const decoded = jwtDecode<UsuarioPayload>(token)
        return {
            nome: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] || "",
            email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] || "",
        }
    } catch {
        return null;
    }
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY!).then((tokenSalvo) => {
            if(tokenSalvo){
                setToken(tokenSalvo)
                setUsuario(decodificarToken(tokenSalvo))
            }
        }) 
        .finally(() => 
            setLoading(false))
    }, [])

    async function login(dados: Login) {
        console.log(dados.email)
        console.log(dados.senha)
        const resposta = await autenticacaoService.login(dados)

        if(resposta.token){
            setToken(resposta.token)
            setUsuario(decodificarToken(resposta.token))
        }

        console.log(resposta)
    }

    async function logout() {
        await AsyncStorage.removeItem(process.env.EXPO_PUBLIC_TOKEN_KEY!);
        setToken(null)
        setUsuario(null)
        router.replace('/loginComBiometria')
    }

    return(
        <AuthContext.Provider value={{usuario, token, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}
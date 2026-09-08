import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextData, Login, Usuario, UsuarioPayload } from "../@types/autenticacao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { autenticacaoService } from "../services/auth/autenticacaoService";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode"

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function decodificarToken(token: string): Usuario | null {
    try {
        const decoded = jwtDecode<UsuarioPayload>(token)
        return {
            nome: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] || "",
            email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] || "",
            usuarioId: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || "",
        }
    } catch {
        return null;
    }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY!).then((tokenSalvo) => {
            if (tokenSalvo) {
                setToken(tokenSalvo)
                setUsuario(decodificarToken(tokenSalvo))
            }
        })
            .finally(() =>
                setLoading(false))
    }, [])

    async function login(dados: Login) {
        const resposta = await autenticacaoService.login(dados)

        if (resposta.token) {
            // Salva o token principal no AsyncStorage
            await AsyncStorage.setItem(process.env.EXPO_PUBLIC_TOKEN_KEY!, resposta.token);

            // Opcional: Salva o email do usuário caso queira mostrar na tela de biometria
            if (dados.email) {
                await AsyncStorage.setItem("@usuario_email", dados.email);
            }

            setToken(resposta.token);
            setUsuario(decodificarToken(resposta.token));
        }
    }


    async function logout() {
        await AsyncStorage.removeItem(process.env.EXPO_PUBLIC_TOKEN_KEY!);
        await AsyncStorage.removeItem("@usuario_email");

        setToken(null);
        setUsuario(null);
        router.replace('/login/loginSemBiometria');
    }

    return (
        <AuthContext.Provider value={{ usuario, token, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
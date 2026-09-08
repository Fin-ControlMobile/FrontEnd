// import AsyncStorage from "@react-native-async-storage/async-storage/lib/typescript/AsyncStorage";
import { UsuarioPrimeiroAcesso } from "../@types";import { useAuth } from "../context/AuthContext";
import api from "./api";


export const primeiroAcessoService = {
    
    async verificar(usuarioId: string): Promise<UsuarioPrimeiroAcesso> {
        try {

            // const id = await AsyncStorage.getItem("idUsuario");
            const resposta = await api.get<UsuarioPrimeiroAcesso>(`Usuario/${usuarioId}`);
            return resposta.data;
            
        } catch (error : any) {
            console.log(error.message);
            return error
        }
    }
}
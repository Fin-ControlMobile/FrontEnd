import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login, LoginResponse } from "../../@types/autenticacao";
import api from "../api";

export const autenticacaoService = {
    async login(dados: Login) : Promise<LoginResponse>{
        const {data} = await api.post<LoginResponse>("Autenticacao/login", dados);
        if(data.token){
            await AsyncStorage.setItem(process.env.EXPO_PUBLIC_TOKEN_KEY!, data.token)
        }
        
        return data
    },
      async solicitarRedefinicaoSenha(email: string) {
        const response = await api.post(
          "/Autenticacao/solicitar-redefinicao",
          {
            email
          }
        );
    
        return response.data;
      },
    
      async redefinirSenha(
        email: string,
        token: string,
        novaSenha: string
      ) {
        const response = await api.post(
          "/Autenticacao/redefinir-senha",
          {
            email,
            token,
            novaSenha
          }
        );
    
        return response.data;
      }

    
}
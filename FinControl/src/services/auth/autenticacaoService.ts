import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login, LoginResponse } from "../../@types/autenticacao";
import api from "../api";

export const autenticacaoService = {
    async login(dados: Login) : Promise<LoginResponse>{
        console.log(dados)
        const {data} = await api.post<LoginResponse>("Autenticacao/login", dados);
        console.log(data)
        if(data.token){
            await AsyncStorage.setItem(process.env.EXPO_PUBLIC_TOKEN_KEY!, data.token)
        }
        
        return data
    }
}
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Platform } from "react-native";

<<<<<<< HEAD
//definndo o host local conforme plataforma(expo, web, ios)
const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const porta = process.env.EXPO_PUBLIC_PORTA || "5015";
//dessa forma, conseguimos rodar tanto na web quanto no emulador
=======

const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const porta = process.env.EXPO_PUBLIC_PORTA;
>>>>>>> 2ebd293030505c045064c6ee141b87b5c35f7bb7
const enderecoApi = process.env.EXPO_PUBLIC_API_URL || `http://${host}:${porta}`;

export const api = axios.create({
    baseURL: enderecoApi,
    timeout: 10000
<<<<<<< HEAD
});

// SOLICITAÇÂO/REQUISIÇÂO: PEDIR O TOKEN DO USUARIO
//INTERCEPTAR/IMPEDIR O CURSO DA REQUISIÇÂO FEITA PELA API
// api.interceptors.request.use(async (config) => {
//     const token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY);

//     if(token){
//         config.headers.Authorization = `Bearer ${token}`
//     }

//     return config;
// })
=======
})

console.log(api.defaults.baseURL)

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY);

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api
>>>>>>> 2ebd293030505c045064c6ee141b87b5c35f7bb7

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Platform } from "react-native";


const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const porta = process.env.EXPO_PUBLIC_PORTA;
const enderecoApi = process.env.EXPO_PUBLIC_API_URL || `http://${host}:${porta}`;

export const api = axios.create({
    baseURL: enderecoApi,
    timeout: 10000
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
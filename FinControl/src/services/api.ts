import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000,
});


api.interceptors.request.use(async(config) => {
    const token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY);

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})
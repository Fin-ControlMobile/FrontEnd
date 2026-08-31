import { Usuario, UsuarioCadastro } from "../@types";
import { api } from "./api";

export const cadastroService = {
    async cadastrar(dados: UsuarioCadastro): Promise<Usuario> {
        const response = await api.post<Usuario>("/Usuario", {
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha
        });
        console.log(response.data)
        return response.data;
    }
};
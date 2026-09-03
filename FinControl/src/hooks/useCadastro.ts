import { Alert } from "react-native";
import { cadastroService } from "../services/cadastroService";
import { UsuarioCadastro } from "../@types";

export function useCadastro() {
    async function cadastroUsuario(dados: UsuarioCadastro) {
        try {
            const novoUsuario = await cadastroService.cadastrar(dados);
            Alert.alert("Cadastro feito com sucesso");
            return novoUsuario;
        } catch (error: any) {
            Alert.alert(
                "Erro ao cadastrar",
                error.response?.data?.message 
            );
        }
    }

    return {
        cadastroUsuario
    };
}

export default useCadastro;
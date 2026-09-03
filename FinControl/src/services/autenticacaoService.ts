import { api } from "./api";

export const autenticacaoService = {

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

};
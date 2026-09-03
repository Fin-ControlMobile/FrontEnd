import { useState } from "react";
import { autenticacaoService } from "../services/autenticacaoService";

export function useRecuperacaoSenha() {
  const [loading, setLoading] = useState(false);

  const solicitarRedefinicao = async (email: string) => {
    try {
      setLoading(true);

      const response =
        await autenticacaoService.solicitarRedefinicaoSenha(email);

      return response;
    } finally {
      setLoading(false);
    }
  };

  const redefinirSenha = async (
    email: string,
    token: string,
    novaSenha: string
  ) => {
    try {
      setLoading(true);

      const response = await autenticacaoService.redefinirSenha(
        email,
        token,
        novaSenha
      );

      return response;
    } finally {
      setLoading(false);
    }
  };

  return {
    solicitarRedefinicao,
    redefinirSenha,
    loading,
  };
}
import { useEffect, useState } from 'react';
import {solicitarPermissaoNotificacao,enviarNotificacao} from '../services/notificacaoService';

export function useNotificacao() {
  const [permitido, setPermitido] = useState(false);

  useEffect(() => {
    async function configurar() {
      const autorizado =
        await solicitarPermissaoNotificacao();

      setPermitido(autorizado);
    }

    configurar();
  }, []);

  const notificar = async (
    titulo: string,
    mensagem: string
  ) => {
    if (!permitido) return;

    await enviarNotificacao(titulo, mensagem);
  };

  return {
    permitido,
    notificar,
  };
}
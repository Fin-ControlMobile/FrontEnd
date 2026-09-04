import { TransactionApiResponse } from "../@types/movementLists";
import { api } from "./api";

export const transactionService = {
     async List(): Promise<TransactionApiResponse[]> {
        //requisicao:
        //Obs. se estamos trabalhando com lista não esqueça do [] array
        const resposta = await api.get<TransactionApiResponse[]>("Transacao");

        return resposta.data;
    },

    async GetById(id: string): Promise<TransactionApiResponse> {
        const resposta = await api.get<TransactionApiResponse>(`Transacao/obterTransacao/${id}`);
        return resposta.data;
    }
}
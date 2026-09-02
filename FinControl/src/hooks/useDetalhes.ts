import { useEffect, useState } from "react";
import { TransactionApiResponse } from "../@types/movementLists";
import { transactionService } from "../services/transactionService";

export function useDetalhesTransacao(id: string) {

    const [transacao, setTransacao] = useState<TransactionApiResponse | null>(null);
    const [dataTransacaoFormatada, setDataTransacaoFormatada] = useState<string>('');
    const [valorFormatado, setValorFormatado] = useState<string>('');

    async function carregarTransacao() {
        try {
            const dados = await transactionService.GetById(id);
            setTransacao(dados);
        } catch (error) {
            console.log("Nao foi possivel carregar os detalhes da ordem de servico.")
        }
    }

    function formatarData(dataISO: string): string {
        const data = new Date(dataISO);

        const dataFormatada = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).format(data);

        const horaFormatada = new Intl.DateTimeFormat('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }).format(data);

        return `${dataFormatada}, ${horaFormatada}`;
    }

    function formatarValor(valor: number): string {
        const isNegativo = valor < 0;

        const valorFormatado = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(Math.abs(valor));

        return isNegativo ? `- ${valorFormatado}` : `${valorFormatado}`;
    }

    useEffect(() => {
        carregarTransacao();
    }, [id])

    useEffect(() => {
        if (transacao) {
            setDataTransacaoFormatada(formatarData(transacao.dataTransacao));
            setValorFormatado(formatarValor(transacao.valorTransferencia));
        }
    }, [transacao])

    return {
        transacao,
        dataTransacaoFormatada,
        valorFormatado
    }
}
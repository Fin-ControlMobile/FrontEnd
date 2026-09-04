import { useState, useEffect, useCallback } from 'react';
import { transactionService } from '../services/transactionService';
import { TransactionApiResponse } from '../@types/movementLists';
import { BalanceSummary } from '../@types/balanceSummary';


function calculateBalanceSummary(transactions: TransactionApiResponse[]): BalanceSummary {
  const now = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(now.getDate() - 30);

  let totalEntradas = 0;
  let totalSaidas = 0;

  transactions.forEach((tx) => {
    const txDate = new Date(tx.dataTransacao);

    if (txDate >= thirtyDaysAgo) {
      if (tx.valorTransferencia > 0) {
        totalEntradas += tx.valorTransferencia;
      } else {
        totalSaidas += Math.abs(tx.valorTransferencia);
      }
    }
  });

  const totalBalance = totalEntradas - totalSaidas;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);

  return {
    formattedBalance: formatCurrency(totalBalance),
    formattedEntradas: formatCurrency(totalEntradas),
    formattedSaidas: formatCurrency(totalSaidas),
    rawBalance: totalBalance,
  };
}

export function useBalance() {
  const [balanceData, setBalanceData] = useState<BalanceSummary>({
    formattedBalance: 'R$ 0,00',
    formattedEntradas: 'R$ 0,00',
    formattedSaidas: 'R$ 0,00',
    rawBalance: 0,
  });

  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const toggleShowBalance = useCallback(() => {
    setShowBalance((prev) => !prev);
  }, []);

  const loadBalance = useCallback(async () => {
    try {
      setLoading(true);
      const transactions = await transactionService.List();
      const summary = calculateBalanceSummary(transactions);
      setBalanceData(summary);
    } catch (error) {
      console.error('Erro ao carregar saldo:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBalance();
  }, [loadBalance]);

  return {
    balanceData,
    showBalance,
    toggleShowBalance,
    loading,
    refetchBalance: loadBalance,
  };
}
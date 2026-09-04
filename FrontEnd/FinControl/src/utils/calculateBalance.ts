import { BalanceSummary } from "../@types/balanceSummary";
import { TransactionApiResponse } from "../@types/movementLists";

export function calculateBalanceSummary(transactions: TransactionApiResponse[]): BalanceSummary {
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
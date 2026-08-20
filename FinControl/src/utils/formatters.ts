import { FontAwesomeName, Movement, TransactionApiResponse } from "../@types/movementLists";

export function getIcon(formaPagamento: string = ''): FontAwesomeName {
  const map: Record<string, FontAwesomeName> = {
    pix: 'exchange-alt',
    cartao: 'credit-card',
    boleto: 'barcode',
    salario: 'briefcase',
    alimentacao: 'utensils',
    transporte: 'car',
    mercado: 'shopping-cart',
  };

  return map[formaPagamento.toLowerCase()] || 'wallet';
}

export function transformApiToMovement(
  item: TransactionApiResponse,
  currentUserId?: string
): Movement {
  const date = new Date(item.dataTransacao);
  const isIncome = item.valorTransferencia > 0;

  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Math.abs(item.valorTransferencia));

  const formattedTime = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const subtitleText = item.formaPagamento 
    ? `${formattedTime} • ${item.formaPagamento}` 
    : formattedTime;

  return {
    id: item.transacaoId,
    title: item.descricao || (isIncome ? item.remetente : item.destinatario) || 'Transação',
    subtitle: subtitleText,
    amount: formattedAmount,
    type: isIncome ? 'income' : 'outcome',
    icon: getIcon(item.formaPagamento || item.descricao),
  };
}
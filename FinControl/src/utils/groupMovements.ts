import { GroupedSection, TransactionApiResponse } from '../@types/movementLists';
import { transformApiToMovement } from './formatters';

export function groupTransactionsByDate(
  transactions: TransactionApiResponse[],
  currentUserId?: string
): GroupedSection[] {
  const groups: Record<string, any[]> = {};

  transactions.forEach((tx) => {
    const date = new Date(tx.dataTransacao);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    let dateTitle = date
      .toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
      .replace('.', '')
      .toUpperCase();

    if (date.toDateString() === today.toDateString()) {
      dateTitle = 'HOJE';
    } else if (date.toDateString() === yesterday.toDateString()) {
      dateTitle = 'ONTEM';
    }

    if (!groups[dateTitle]) {
      groups[dateTitle] = [];
    }

    groups[dateTitle].push(transformApiToMovement(tx, currentUserId));
  });

  return Object.keys(groups).map((title) => ({
    title,
    data: groups[title],
  }));
}
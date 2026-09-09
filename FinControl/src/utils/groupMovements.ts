import {
  TransactionApiResponse,
  GroupedSection,
} from '../@types/movementLists';

import { transformApiToMovement } from './formatters';

export function groupTransactionsByDate(
  transactions: TransactionApiResponse[],
  currentUserId?: string
): GroupedSection[] {
  const groups: Record<string, any[]> = {};

  transactions.forEach((tx) => {
    const date = new Date(tx.dataTransacao);

    // Chave interna da data: YYYY-MM-DD
    const dateKey = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0'),
    ].join('-');

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }

    groups[dateKey].push(
      transformApiToMovement(tx, currentUserId)
    );
  });

  const today = new Date();

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  // Ordena as datas da mais recente para a mais antiga
  const sortedDates = Object.keys(groups).sort((a, b) => {
    return (
      new Date(`${b}T12:00:00`).getTime() -
      new Date(`${a}T12:00:00`).getTime()
    );
  });

  return sortedDates.map((dateKey) => {
    const date = new Date(`${dateKey}T12:00:00`);

    let title = date
      .toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      });

    if (date.toDateString() === today.toDateString()) {
      title = 'HOJE';
    } else if (date.toDateString() === yesterday.toDateString()) {
      title = 'ONTEM';
    }

    return {
      title,
      data: groups[dateKey],
    };
  });
}

import { ComponentProps } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Extrai a tipagem oficial dos ícones do Expo
export type FontAwesomeName = ComponentProps<typeof FontAwesome5>['name'];

// Payload exato retornado da sua API
export interface TransactionApiResponse {
  transacaoId: string;
  valorTransferencia: number;
  dataTransacao: string;
  descricao: string;
  remetente: string;
  destinatario: string;
  formaPagamento: string;
}

// Modelo interno formatado para exibição na UI
export interface Movement {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  type: 'income' | 'outcome';
  icon: FontAwesomeName;
}

export interface GroupedSection {
  title: string;
  data: Movement[];
}
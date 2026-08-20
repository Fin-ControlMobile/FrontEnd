export interface MovementItem {
  transacaoId: string;
  valorTransferencia: number;
  dataTransacao: string; // ISO String
  descricao: string;
  remetente: string;
  destinatario: string;
  formaPagamento: string;
}

export interface MovementItemProps {
  data: MovementItem;
  onPress?: () => void;
}

export interface recentMovementsProps {
  data: MovementItem[];
  onItemPress: (id: string) => void;
}
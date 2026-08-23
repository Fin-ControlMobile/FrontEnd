import { TransactionApiResponse } from "../@types/movementLists";

// Gera datas relativas para que "HOJE" e "ONTEM" funcionem em qualquer dia de teste
const today = new Date();

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const olderDate = new Date();
olderDate.setDate(today.getDate() - 5);

export const MOCK_TRANSACTIONS: TransactionApiResponse[] = [
  // --- HOJE ---
  {
    transacaoId: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
    valorTransferencia: -145.90,
    dataTransacao: today.toISOString(),
    descricao: 'Supermercado Extra',
    remetente: 'Seu Nome',
    destinatario: 'Supermercado Extra LTDA',
    formaPagamento: 'cartao',
  },
  {
    transacaoId: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
    valorTransferencia: 250.00,
    dataTransacao: today.toISOString(),
    descricao: 'Pix Recebido',
    remetente: 'Maria Silva',
    destinatario: 'Seu Nome',
    formaPagamento: 'pix',
  },

  // --- ONTEM ---
  {
    transacaoId: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
    valorTransferencia: -28.50,
    dataTransacao: yesterday.toISOString(),
    descricao: 'Starbucks',
    remetente: 'Seu Nome',
    destinatario: 'Starbucks Brasil',
    formaPagamento: 'cartao',
  },
  {
    transacaoId: '3fa85f64-5717-4562-b3fc-2c963f66afa4',
    valorTransferencia: -42.00,
    dataTransacao: yesterday.toISOString(),
    descricao: 'Uber Viagem',
    remetente: 'Seu Nome',
    destinatario: 'Uber do Brasil',
    formaPagamento: 'pix',
  },

  // --- DIAS ANTERIORES ---
  {
    transacaoId: '3fa85f64-5717-4562-b3fc-2c963f66afa5',
    valorTransferencia: 3500.00,
    dataTransacao: olderDate.toISOString(),
    descricao: 'Salário Mensal',
    remetente: 'Tech Company LTDA',
    destinatario: 'Seu Nome',
    formaPagamento: 'salario',
  },
  {
    transacaoId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    valorTransferencia: -180.00,
    dataTransacao: olderDate.toISOString(),
    descricao: 'Conta de Energia',
    remetente: 'Seu Nome',
    destinatario: 'Enel Distribuição',
    formaPagamento: 'boleto',
  },
];
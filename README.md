# FinControl

<p align="center">
  Aplicativo mobile para gerenciamento financeiro pessoal.
</p>

<p align="center">
  Desenvolvido com React Native, Expo e TypeScript.
</p>

---

## 📱 Sobre o projeto

O **FinControl** é uma aplicação mobile desenvolvida para auxiliar no gerenciamento das finanças pessoais.

A aplicação permite que o usuário acompanhe suas informações financeiras através de uma interface mobile, realizando autenticação e acesso às funcionalidades do sistema por meio de uma API REST.

O projeto foi desenvolvido utilizando **React Native com Expo**, com foco em organização de componentes, navegação entre telas, integração com API e recursos nativos do dispositivo.

---

## ✨ Funcionalidades

- 🔐 Autenticação de usuários
- 👤 Cadastro e acesso à conta
- 📊 Visualização das informações financeiras
- 💰 Gerenciamento das informações financeiras
- 📋 Visualização de movimentações
- 🔎 Visualização de detalhes
- ⚙️ Configurações de segurança
- 🧬 Autenticação biométrica
- 🔒 Armazenamento seguro de informações
- 🌐 Integração com API REST
- 📱 Interface adaptada para dispositivos móveis

---

## 🧬 Autenticação Biométrica

Um dos principais recursos do FinControl é a possibilidade de autenticação utilizando os recursos biométricos disponíveis no dispositivo.

A implementação utiliza:

- `expo-local-authentication`
- Biometria do dispositivo
- Face ID no iOS
- Impressão digital / biometria no Android
- Permissões nativas do Android
- Configuração específica para Face ID

O projeto verifica inicialmente se o dispositivo possui suporte à biometria e se existe uma biometria cadastrada.

Depois disso, a aplicação pode solicitar a autenticação biométrica antes de permitir o acesso ao usuário.

### Fluxo

```text
┌──────────────────────┐
│      Usuário         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Tela de autenticação │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Verificar biometria  │
│ disponível           │
└──────────┬───────────┘
           │
      ┌────┴────┐
      │         │
     Sim       Não
      │         │
      ▼         ▼
┌──────────┐  ┌──────────────┐
│ Biometria│  │ Login normal │
│          │  │              │
└────┬─────┘  └──────┬───────┘
     │               │
     └───────┬───────┘
             ▼
      ┌─────────────┐
      │    Home     │
      └─────────────┘

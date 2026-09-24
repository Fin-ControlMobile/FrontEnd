# FinControl — Frontend Mobile

<p align="center">
  Aplicação mobile para gerenciamento financeiro.
</p>

<p align="center">
  React Native • Expo • TypeScript
</p>

---

## 📱 Sobre o projeto

O **FinControl** é uma aplicação mobile desenvolvida para auxiliar no gerenciamento das finanças pessoais.

Este repositório contém exclusivamente o **frontend mobile** da aplicação, desenvolvido com **React Native, Expo e TypeScript**.

O aplicativo se comunica com uma **API REST** responsável pelo processamento e gerenciamento dos dados.

> Este projeto faz parte de uma arquitetura composta por um frontend mobile e um backend separado.

### 🔗 Repositório do Backend

[FinControl — Backend API](https://github.com/Fin-ControlMobile/FinControlAPI)

---

## ✨ Funcionalidades

- 🔐 Autenticação de usuários
- 👤 Cadastro de usuários
- 📊 Visualização de informações financeiras
- 💰 Gerenciamento de informações financeiras
- 📋 Visualização de movimentações
- 🔎 Visualização de detalhes
- ⚙️ Configurações de segurança
- 🧬 Autenticação biométrica
- 🔒 Armazenamento seguro de informações
- 🌐 Integração com API REST

---

## 🧬 Autenticação Biométrica

Um dos recursos implementados no aplicativo é a autenticação utilizando a biometria disponível no dispositivo.

A implementação utiliza:

- `expo-local-authentication`
- Biometria do dispositivo
- Face ID
- Impressão digital
- Permissões nativas do Android

O aplicativo verifica a compatibilidade do dispositivo e a existência de uma biometria cadastrada antes de solicitar a autenticação.

### Fluxo

```text
┌──────────────────────┐
│       Usuário        │
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
└──────────┬───────────┘
           │
      ┌────┴────┐
      │         │
     Sim       Não
      │         │
      ▼         ▼
┌──────────┐ ┌─────────────┐
│ Biometria│ │ Login normal│
└────┬─────┘ └──────┬──────┘
     │              │
     └──────┬───────┘
            ▼
      ┌───────────┐
      │   Home    │
      └───────────┘

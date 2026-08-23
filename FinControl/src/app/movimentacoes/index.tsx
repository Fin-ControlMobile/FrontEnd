import { FlatList, FlatListComponent, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import CardMovimentacao from "../../components/cardMovimentacao/cardMovimentacao"
import { Ionicons } from "@expo/vector-icons"
import { colors, fonts } from "../../constants/theme"
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Footer from "../../components/footer/footer";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovementsScreen } from "../../components/movementLists/movementScreen";
import { MOCK_TRANSACTIONS } from "../../mocks/transction.mock";
import { groupTransactionsByDate } from "../../utils/groupMovements";


export default function Movimentacoes() {
  const groupedData = groupTransactionsByDate(MOCK_TRANSACTIONS);

  return (
    <>
      <MovementsScreen 
      sections={groupedData } 
      onItemPress={(id) => console.log('Detalhes da transação:', id)}
    />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: colors.bgc,
    flex: 1
  },
  main: {
    width: '100%',
    gap: '2%'
  }
  ,
  headerMov: {
    backgroundColor: colors.superface,
    height: '10%',
    justifyContent: 'space-around',
    padding: '2%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '44%'
  },
  txtHeader: {
    color: colors.purpleEmphasis,
    fontSize: 25,
    fontFamily: fonts.manropExtraBold
  },
  textFiltro: {
    color: colors.colorFont,
    fontSize: 16,
    fontFamily: fonts.jetBrainsRegular,
    opacity: 0.6
  },
  tabelaCards: {
    width: '100%',
    flexDirection: 'column',
    height: '60%',
    alignItems: 'center'
  },
  txtIndicativo: {
    color: colors.colorFontTile,
    fontSize: 20,
    fontFamily: fonts.manropSemiBold
  },
  btnNotif: {
    width: '40%'
  },
  btnFiltro: {
    backgroundColor: colors.superface,
    height: '100%',
    width: '12%',
    alignItems: 'center',
    borderRadius: 10,
    padding: '2%'
  },
  tabela: {
    textAlign: 'left',
    padding: '2%',
    width: '100%',
    gap: '4%'
  },
  filtros: {
    width: "100%",
    padding: "2%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  filtroText: {
    backgroundColor: colors.superface,
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
  },

  selectContainer: {
    backgroundColor: colors.superface,
    width: '16.5%',
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: 'center',
    flexDirection: 'row',
    padding: '3%'
  },
  select: {
    width: 40,
    height: 50,
    color: colors.superface,
    borderRadius: 10
  },
  item: {
    backgroundColor: colors.superface,
    borderRadius: 10,
  }
})
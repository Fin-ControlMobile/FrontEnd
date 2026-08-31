import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors, fonts } from "../../constants/theme"

import { MovementsScreen } from "../../components/movementLists/movementScreen";
import { MOCK_TRANSACTIONS } from "../../mocks/transction.mock";
import { groupTransactionsByDate } from "../../utils/groupMovements";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/footer/footer";


export default function Movimentacoes() {
  const groupedData = groupTransactionsByDate(MOCK_TRANSACTIONS);

  return (
    <>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.headerMov}>
          <Text style={styles.txtHeader}>Movimentacoes</Text>
        </View>
        <MovementsScreen
          sections={groupedData}
          onItemPress={(id) => console.log('Detalhes da transação:', id)}
        />
      </SafeAreaView>
            <View style={styles.containerFooter}>
              <Footer 
              activeTab='wallet'
              />
            </View>
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
    padding: 20,
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '44%'
  },
  txtHeader: {
    color: colors.purpleEmphasis,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Manrope_700Bold'
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
  },
    containerFooter: {
        backgroundColor: colors.bgc
    }
})
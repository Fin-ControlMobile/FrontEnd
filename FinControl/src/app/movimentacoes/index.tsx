import { FlatList, FlatListComponent, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import CardMovimentacao from "../../components/cardMovimentacao/cardMovimentacao"
import { Ionicons } from "@expo/vector-icons"
import { colors, fonts } from "../../constants/theme"
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Footer from "../../components/footer/footer";
import { SafeAreaView } from "react-native-safe-area-context";

const dados = [
  { id: '1', name: 'Todas' },
  { id: '2', name: 'Hoje' },
  { id: '3', name: 'Ontem' },
  { id: '4', name: 'Recentes' }
];


export default function Movimentacoes() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("Todas");


  return (
    <>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

        <View style={styles.headerMov}>
          <Text style={styles.txtHeader}>Movimentacoes</Text>
          <TouchableOpacity style={styles.btnNotif}><Ionicons size={20} name="notifications" color={colors.colorFont} /></TouchableOpacity>
        </View>

        <View style={styles.main}>
          <View style={styles.filtros}>

            <View style={styles.filtroText}>
              <Ionicons name="search" size={24} color={colors.colorFont} />
              <TextInput placeholderTextColor={colors.colorFont} placeholder="Buscar movimentacoes" style={styles.textFiltro} />
            </View>


            <View style={styles.selectContainer}>
              <Ionicons
                name="filter-outline"
                size={20}
                color={colors.colorFont}
                pointerEvents="none"
              />
              <Picker
                selectedValue={filtroSelecionado}
                onValueChange={(itemValue) =>
                  setFiltroSelecionado(itemValue)
                }
                dropdownIconColor={colors.colorFont}
                style={styles.select}
              >
                {dados.map((item) => (
                  <Picker.Item
                    key={item.id}
                    label={item.name}
                    value={item.name}
                    color={colors.colorFont}
                    style={styles.item}
                  />
                ))}
              </Picker>

            </View>

          </View>

          <View style={styles.tabela}>
            <Text style={styles.txtIndicativo}>Todas</Text>
            <View style={styles.tabelaCards}>
              <CardMovimentacao />
              <CardMovimentacao />
              <CardMovimentacao />
            </View>
          </View>
        </View>

        <Footer
          activeTab="wallet"
        />
      </SafeAreaView>
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
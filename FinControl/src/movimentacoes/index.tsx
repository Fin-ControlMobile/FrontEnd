import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import CardMovimentacao from "../components/cardMovimentacao/cardMovimentacao"


export default function Movimentacoes(){
  return (
    <View style={styles.container}>
        <View style={styles.headerMov}>
          <Text style={styles.txtHeader}>Movimentacoes</Text>
          <Image/>
        </View>

        <View style={styles.main}>
          <View style={styles.filtros}>
            <TextInput style={styles.textFiltro}/>
            <TouchableOpacity><Image/></TouchableOpacity>
          </View>

          <View style={styles.tabelaCards}>
            <Text style={styles.txtIndicativo}>Hoje</Text>
            <CardMovimentacao/>
            <CardMovimentacao/>
            <CardMovimentacao/>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#051424',
    alignItems: 'center',
    gap: '6%'
  },
  main:{
    width: '100%'
  }
  ,
  headerMov:{
    backgroundColor: '#0D1C2D',
    height: '10%',
    justifyContent: 'center',
    padding: '5%',
    width: '100%'
  },
  txtHeader:{
    color: '#D0BCFF',
    fontSize: 25,
    fontWeight: 600
  },
  textFiltro:{
      backgroundColor: '#0D1C2D',
      width: '80%',
      borderRadius: 10
  },
  filtros:{
    width: '100%',
    padding: '2%'
  },
  tabelaCards:{
    width: '100%',
    padding: '2%',
    flexDirection: 'column',
    height: '60%',
    alignItems: 'center'
  },
  txtIndicativo:{
    color: '#ffffff',
    marginBottom: '3%',
    textAlign: 'left'
  }
})
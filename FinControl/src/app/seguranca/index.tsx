import { Image, StyleSheet, Text, View } from "react-native";
import Footer from "../../components/footer/footer";

import { colors } from "../../const/const";
import { Ionicons } from "@expo/vector-icons";

export default function Seguranca() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <View style={styles.configuracao}>
          <Text style={styles.textoTitulo}>Configurações</Text>
        </View>
        <View style={styles.titulosPagina}>
          <Text style={styles.tituloSessao}>Segurança</Text>
          <Text style={styles.subTituloSessao}>Gerencie suas configurações de acesso e
            proteção.</Text>
        </View>
        <View style={styles.blocos}>

          <View style={styles.blocoSessao}>
            <Ionicons name="shield-checkmark-outline" color={"#CBC3D7"} size={30} />
            <View style={styles.textosBloco}>
              <Text style={styles.tituloBloco}>Sessão segura</Text>
              <Text style={styles.descricaoBloco}>Seu aplicativo está protegido. A sessão
                será encerrada automaticamente após
                15 minutos de inatividade.</Text>
            </View>
          </View>

          <View style={styles.blocoEncerrar}>
            <Image source={require('../../../assets/encerrarServico.png')} />
            <Text style={styles.textoEncerrar}>Encerrar sessão</Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.infoPagina}>
            <Ionicons name='information-circle-outline' color={"#CBC3D7"} size={15} />
            <Text style={styles.tituloInfo}>Sobre a segurança</Text>
          </View>

          <Text style={styles.subTituloSessao}>
            Seus dados são criptografados de ponta a ponta.
            As chaves de acesso são armazenadas
            localmente no seu dispositivo de forma segura. O
            FinControl nunca compartilha suas senhas.
          </Text>
        </View>

      </View>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  conteudo: {
    gap: 10,
    paddingTop: 30
  },
  configuracao: {
    backgroundColor: colors.superface,
    padding: 20
  },
  titulosPagina: {
    padding: 20,
    gap: 10,
  },
  textoTitulo: {
    color: colors.purpleEmphasis,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Manrope_700Bold'
  },
  tituloSessao: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Manrope_700Bold'
  },
  subTituloSessao: {
    color: colors.colorFont,
    fontSize: 16
  },
  blocos: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textosBloco: {
    width: "80%"
  },
  blocoSessao: {
    backgroundColor: colors.superface,
    flexDirection: 'row',
    height: 120,
    gap: 20,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#273647',
    borderWidth: 2
  },
  tituloBloco: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'JetBrainsMono_400Regular'
  },
  descricaoBloco: {
    color: colors.colorFont,
    fontSize: 16,

  },
  blocoEncerrar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: colors.superface,
    borderColor: colors.exitRed,
    borderRadius: 10,
    width: '90%',
    height: 80,
    gap: 20,
    paddingLeft: 10
  },
  textoEncerrar: {
    color: colors.transitionRed,
    fontFamily: 'JetBrainsMono_400Regular'
  },
  info:{
    padding: 10,
  },
  infoPagina: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  tituloInfo:{
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 16,
    color: colors.white
  }
})



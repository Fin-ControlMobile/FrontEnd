import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../../../components/footer/footer";

import { colors } from "../../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../../context/AuthContext";

export default function Seguranca() {

  const { logout } = useAuth()
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
            <View style={styles.containerIconShild}>
              <Ionicons name="shield-checkmark-outline" color={"#CBC3D7"} size={30} />
            </View>
            <View style={styles.textosBloco}>
              <Text style={styles.tituloBloco}>Sessão segura</Text>
              <Text style={styles.descricaoBloco}>Seu aplicativo está protegido. A sessão
                será encerrada automaticamente após
                15 minutos de inatividade.</Text>
            </View>
          </View>

          <View style={styles.blocoEncerrar}>
            <View style={styles.containerIconExit}>
              <Ionicons name="exit-outline" size={30} color="#FFB4AB" />
            </View>
            <TouchableOpacity onPress={logout}>
              <Text style={styles.textoEncerrar}>Encerrar sessão</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.infoPagina}>
            <Ionicons name='information-circle-outline' color={"#CBC3D7"} size={25} />
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

      <Footer
        activeTab="shield"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: colors.bgc
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
    fontSize: 16,
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
    fontSize: 18,
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
  containerIconExit: {
    backgroundColor: "#93000A",
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  containerIconShild: {
    backgroundColor: "rgba(255,255,255, 0.1)",
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  textoEncerrar: {
    color: colors.transitionRed,
    fontFamily: 'JetBrainsMono_400Regular'
  },
  info: {
    padding: 20,
  },
  infoPagina: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  tituloInfo: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 16,
    color: colors.white
  }
})



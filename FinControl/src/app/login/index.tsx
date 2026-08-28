import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles/styles';
import { useRouter } from 'expo-router';
import { authenticateUser } from '../../services/auth/biometricService';

export default function Login() {
  const router = useRouter();
  async function acessar() {
    const autenticado = await authenticateUser();
    if(autenticado){
      router.push("/home");
    }else{
      Alert.alert("Erro!","Autenticacao Invalida");
    }
  }
  function acessarLoginSemBiometria(){
    router.push("/login/loginSemBiometria");
  }

  return (
    <View style={styles.background}>
      <View style={styles.titleLogin}>
        <Text style={styles.textTitle}>FinControl</Text>
        <Text style={styles.textLogin}>Seu Dinheiro.Seu controle</Text>
      </View>

      <View style={styles.articleLogin}>
        <View>
          <Text style={styles.textTitleBiometric}>Acesse sua conta</Text>
        </View>
        <View style={styles.biometricButton}>
          <TouchableOpacity onPress={acessar}>
            <Image style={styles.imgBiometric} source={require("../../../assets/imgs/Biometria.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textLoginBiometria}>Use sua biometria para continuar com segurança.</Text>
          <Text style={styles.textLoginBiometria}>Primeiro Acesso?</Text> 
          <TouchableOpacity onPress={acessarLoginSemBiometria}>
            <Text style={styles.textRegister}>Realize o login sem biometria</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



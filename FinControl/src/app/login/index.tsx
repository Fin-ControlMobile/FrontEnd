import {Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles/styles';
import { useRouter } from 'expo-router';
import {useBiometrics} from '../../hooks/useBiometrics';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();

 const { triggerAuth } = useBiometrics();

  const [attempts, setAttempts] = useState(0);
  const [authenticating, setAuthenticating] = useState(false);

  async function checkAcesso() {
    if (attempts >= 3 || authenticating) {
      return;
    }

    setAuthenticating(true);

    const authenticated = await triggerAuth(
      'Autentique-se para acessar o FinControl'
    );

    setAuthenticating(false);

    if (authenticated) {
      router.replace('/home');
      return;
    }

    const newAttempts = attempts + 1;

    setAttempts(newAttempts);

    if (newAttempts >= 3) {
      router.replace("/login/loginSemBiometria");
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
          <TouchableOpacity onPress={checkAcesso}>
            <Image style={styles.imgBiometric} source={require("../../../assets/imgs/Biometria.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.textAccess}>
          <Text style={styles.textLoginBiometria}>Use sua biometria para continuar com segurança.</Text>
          <Text style={styles.textAccess}>Primeiro Acesso?</Text> 
          <TouchableOpacity onPress={acessarLoginSemBiometria}>
            <Text style={styles.textRegister}>Realize o Login sem Biometria</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



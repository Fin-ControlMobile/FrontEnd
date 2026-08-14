import { Text, TextInput,TouchableOpacity, View } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { styles } from './styles';


export default function Login() {
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
        <View>

        </View>

        <View>
          <Text style={styles.textLogin}>Use sua biometria para continuar com segurança.</Text>
        </View>
      </View>
    </View>
  )
}



export function LoginSemBiometria() {
  return (
    <View style={styles.background}>

      <View style={styles.titleLogin}>
        <Text style={styles.textTitle}>FinControl</Text>
        <Text style={styles.textLogin}>Seu Dinheiro. Seu controle</Text>
      </View>

      <View style={styles.articleLogin}>
        <View style={styles.articleEmail}>
          <Text style={styles.textLogin}>E-mail</Text>
          <View>
            {/*<Fontisto name="email" size={24} color="#958ea0" /> */}

            <TextInput style={styles.inputLogin}
              placeholder="email@email.com"
              placeholderTextColor="#958ea0"
            />
          </View>
        </View>
        <View style={styles.articleEmail}>
          <Text style={styles.textLogin}>Senha</Text>
          <View>
            {/* <Fontisto name="locked" size={20} color="#958ea0" style={styles.icon}/> */}

            <TextInput 
              style={styles.inputLogin}
              placeholder="Insira sua senha"
              placeholderTextColor="#958ea0"
              secureTextEntry
              
            />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.Register}>
          <Text style={styles.textLogin}>Não tem uma Conta?</Text>
          <Text style={styles.textRegister}> Cadastre-se</Text>
        </View>
      </View>

    </View>
  )
}

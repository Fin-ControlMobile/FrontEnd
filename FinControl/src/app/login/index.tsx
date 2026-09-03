import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { router, useRouter } from 'expo-router';
import Fontisto from '@expo/vector-icons/Fontisto';
import { styles } from '../../styles/styles';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export function Login() {

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
          <TouchableOpacity>
            <Image style={styles.imgBiometric} source={require("../../../assets/imgs/Biometria.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textLogin}>Use sua biometria para continuar com segurança.</Text>
        </View>
      </View>
    </View>
  )
}



export default function LoginSemBiometria() {

  const router = useRouter()

  const { login } = useAuth()
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(false);

  async function acessar() {
    const emailDigitado = email.trim();
    const senhaDigitada = senha.trim();
    
    console.log("Email digitado:", emailDigitado);
    console.log("Senha digitada:", senhaDigitada);


    if (!emailDigitado || !senhaDigitada) {
      Alert.alert("Atenção ⚠👀", "Por favor, preencha o e-mail e senha.");
      return;
    }

    try {
      setLoading(true)
      await login({ email: emailDigitado, senha: senhaDigitada })
      router.replace('/home')
    } catch (error: any) {
      const mensagem =
        error?.respons?.data?.message ||
        "E-mail ou senha inválidos. Tente novamente.";
        Alert.alert("Erro ao entrar", typeof mensagem === "string" ? mensagem : "Erro inesperado.");
    } finally{
      setLoading(false)
    }

  }

  function acessarCadastro() {
    router.push("/cadastro")
  }

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
              value={email}
              onChangeText={setEmail}
            ></TextInput>
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
              value={senha}
              onChangeText={setSenha}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={acessar} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#FFFFFFF"/>
          ) : (
            <Text style={styles.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>

        <View style={styles.Register}>
          <Text style={styles.textLogin}>Não tem uma Conta?</Text>
          <TouchableOpacity onPress={acessarCadastro}>
            <Text style={styles.textRegister}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
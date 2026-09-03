import { useRouter } from "expo-router";

import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth, useBiometrics } from "../../hooks/useBiometrics";
import { styles } from "../../styles/styles";
import { useState } from "react";


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
        } finally {
            setLoading(false)
        }

    }

    const {
        isCompatible,
        checkingHardware,
    } = useBiometrics();

    function acessarCadastro() {
        router.push("/cadastro")
    }

    function acessarLoginBiometria() {
        router.push('/login/loginComBiometria');
    }

    function acessarEsqueceuSenha() {
        router.push("/esqueceuSenha")
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
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonLogin} onPress={acessar}>
                    <Text style={styles.textButton}>ENTRAR</Text>
                </TouchableOpacity>

                <View style={styles.Register}>
                    <Text style={styles.textRedirect}>Não tem uma Conta?</Text>
                    <TouchableOpacity onPress={acessarCadastro}>
                        <Text style={styles.textRegister}> Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.RegisterAccess}>
                    <Text style={styles.textRedirect}>Acesse rapidamente com digital! </Text>
                    <TouchableOpacity onPress={acessarLoginBiometria}>
                        <Text style={styles.textRegister}>Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Register}>
                    <TouchableOpacity onPress={acessarEsqueceuSenha}>
                        <Text style={styles.textRegister}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


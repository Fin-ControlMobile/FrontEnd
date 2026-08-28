import { useRouter } from "expo-router";
import { styles } from "../../styles/styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginSemBiometria() {
    const router = useRouter();

    function acessar() {
        router.push("/home")
    }

    function acessarCadastro() {
        router.push("/cadastro")
    }

    function acessarLoginBiometria() {
        router.push("/login");
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

                <TouchableOpacity style={styles.buttonLogin} onPress={acessar}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.Register}>
                    <Text style={styles.textLogin}>Não tem uma Conta?</Text>
                    <TouchableOpacity onPress={acessarCadastro}>
                        <Text style={styles.textRegister}> Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Register}>
                    <Text style={styles.textLogin}>Ja tem uma Conta?</Text>
                    <TouchableOpacity onPress={acessarLoginBiometria}>
                        <Text style={styles.textRegister}>Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

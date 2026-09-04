import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import { colors, Colors, Title, TextRegular } from '../../../constants/theme';
import { UsuarioCadastro } from '../../../@types';
import useCadastro from '../../../hooks/useCadastro';


export default function Cadastro() {

    const { cadastroUsuario } = useCadastro();
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [mostrarSenha,setMostrarSenha] = useState(false);

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    }

    async function handleSalvar() {
        if (!nome.trim() || !email.trim() || !senha.trim()) {
            Alert.alert("Atenção", "Preencha todos os campos obrigatórios (*).");
            return;
        }
        const novoUsuario: UsuarioCadastro = {
            nome: nome,
            email: email,
            senha: senha
        }
        const sucesso = await cadastroUsuario(novoUsuario)


        if (sucesso) {
            setNome("");
            setEmail("");
            setSenha("");
            router.push("/login/loginSemBiometria");
        }
    }

    function acessarLogin() {
        router.push("/login/loginSemBiometria")
    }


    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.h1}>FinControl</Text>
                <Text style={styles.h2}>Crie sua conta agora.</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.container}>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome name="user-o" size={24} color="#494454" />
                            <TextInput
                                placeholder="Seu nome"
                                placeholderTextColor="#494454"
                                style={styles.input}
                                onChangeText={setNome}
                                value={nome}
                            />
                        </View>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>E-mail</Text>
                        <View style={styles.inputContainer}>
                            <Fontisto name="email" size={24} color="#494454" />
                            <TextInput
                                placeholder="seu@email.com"
                                placeholderTextColor="#494454"
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                            />
                        </View>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Senha</Text>
                        <View style={styles.inputContainer}>
                            <AntDesign name="lock" size={24} color="#494454" />
                            <TextInput
                    
                                placeholder="********"
                                placeholderTextColor="#494454"
                                style={styles.input}
                                onChangeText={setSenha}
                                value={senha}
                                secureTextEntry={mostrarSenha}
                            />
                        </View>
                    </View>

                    <View style={styles.entrar} >
                        <TouchableOpacity onPress={toggleMostrarSenha}>
                            <Text style={styles.textoEntrar}>Mostrar Senha</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableHighlight style={styles.botao} onPress={handleSalvar}>
                        <Text style={styles.textoBotao}>CADASTRAR</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.entrar} >
                    <Text style={styles.conta}>Já possui uma conta? </Text>
                    <TouchableOpacity onPress={acessarLogin}>
                        <Text style={styles.textoEntrar}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: colors.bgc,
        justifyContent: "center"
    },

    header: {
        alignItems: 'center',
        padding: 10
    },

    h1: {
        ...Title,
        color: colors.purpleTitleColor
    },

    h2: {
        ...TextRegular,
        color: Colors.whiteTitleColor,
        fontSize: 18
    },

    form: {
        alignItems: 'center',
        backgroundColor: Colors.articleColor,
        width: '90%',
        margin: 20,
        borderRadius: 15,
        padding: 15,
        borderWidth: 2,
        borderColor: Colors.loginBorderColor
    },

    container: {
        margin: 20,
        width: '90%',
        gap: 30,

    },

    campo: {
        ...Text,
        gap: 10
    },

    label: {
        ...TextRegular,
        color: '#CBC3D7'
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(208, 188, 255, 0.5)',
        borderRadius: 10,
        paddingHorizontal: 12,
        gap: 15
    },

    input: {
        flex: 1,
        height: 48,
        color: Colors.purpleTitleColor,

    },

    botao: {
        backgroundColor: Colors.colorButton,
        alignItems: 'center',
        borderRadius: 10,
        padding: 12,
        marginTop: 16,
        marginBottom: 16
    },

    textoBotao: {
        ...TextRegular,
        color: Colors.purpleTitleColor,
    },

    entrar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 2,
    },

    conta: {
        ...TextRegular,
        color: '#CBC3D7',
        fontSize: 16
    },

    textoEntrar: {
        ...TextRegular,
        color: Colors.purpleTitleColor,
        fontSize: 16,
        
    }
})
import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';

export default function Cadastro() {

    function login() {
        router.push("/login")
    }
    return (
        <ScrollView style={styles.body}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <Text style={styles.h1}>FinControl</Text>
                    <Text style={styles.h2}>Crie sua conta agora.</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.container}>
                        <View style={styles.campo}>
                            <Text style={styles.label}>NOME COMPLETO</Text>
                            <View style={styles.inputContainer}>
                                <FontAwesome name="user-o" size={24} color="#494454" />
                                <TextInput
                                    placeholder="Seu nome"
                                    placeholderTextColor="#494454"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.campo}>
                            <Text style={styles.label}>E-MAIL</Text>
                            <View style={styles.inputContainer}>
                                <Fontisto name="email" size={24} color="#494454" />
                                <TextInput
                                    placeholder="seu@email.com"
                                    placeholderTextColor="#494454"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.campo}>
                            <Text style={styles.label}>SENHA</Text>
                            <View style={styles.inputContainer}>
                                <AntDesign name="lock" size={24} color="#494454" />
                                <TextInput
                                    placeholder="********"
                                    placeholderTextColor="#494454"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <TouchableHighlight style={styles.botao} onPress={login}>
                            <Text style={styles.textoBotao}>CADASTRAR</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.entrar} >
                    <Text style={styles.conta}>Já possui uma conta? </Text>
                    <TouchableOpacity onPress={login} style={styles.btnEntrar}>
                        <Text style={styles.textoEntrar}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    body: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#051424',
    },

    main: {
        height: '100%',
        alignItems: 'center',
        gap: 40
    },

    header: {
        alignItems: 'center',
        marginTop: 30,
        gap: 10
    },

    h1: {
        color: '#D0BCFF',
        fontSize: 50,
        fontWeight: 800
    },

    h2: {
        color: '#CBC3D7',
        fontSize: 20
    },

    form: {
        alignItems: 'center',
        backgroundColor: '#1C1926',
        width: '90%',
        marginTop: 40,
        borderRadius: 20
    },

    container: {
        margin: 20,
        width: '90%',
        gap: 30,
    },

    campo: {
        gap: 10
    },

    label: {
        color: '#CBC3D7'
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#494454',
        borderRadius: 15,
        paddingHorizontal: 12,
        gap: 15
    },

    input: {
        flex: 1,
        height: 48,
        color: '#000',
    },

    botao: {
        backgroundColor: '#8B5CF6',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
    },

    textoBotao: {
        color: 'white',
    },

    entrar: {
        flexDirection: 'row'
    },

    conta: {
        color: '#CBC3D7',
        fontSize: 18
    },

    textoEntrar: {
        color: '#8B5CF6',
        fontSize: 18
    },
    btnEntrar: {
        alignItems: 'center'
    }
})
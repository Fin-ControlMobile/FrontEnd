import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useRecuperacaoSenha } from '../../hooks/useRecuperaSenha';


export default function Esqueceu() {

    const [email, setEmail] = useState('');

    const router = useRouter();

    const {
        solicitarRedefinicao,
        loading
    } = useRecuperacaoSenha();

    const enviarCodigo = async () => {

        if (!email.trim()) {
            Alert.alert('Atenção', 'Digite seu e-mail.');
            return;
        }

        try {

            await solicitarRedefinicao(email.trim());

            Alert.alert(
                'Sucesso',
                'Um código de redefinição foi enviado para seu e-mail.'
            );

            router.push({
                pathname: '/redefinirSenha',
                params: {
                    email: email.trim()
                }
            });

        } catch (error) {

            Alert.alert(
                'Erro',
                'Não foi possível enviar o código. Verifique o e-mail e tente novamente.'
            );

        }
    };

    return (

        <ScrollView
            style={styles.body}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
        >

            <View style={styles.main}>

                <View style={styles.header}>

                    <Text style={styles.h1}>
                        FinControl
                    </Text>

                    <Text style={styles.h2}>
                        Redefina sua senha.
                    </Text>

                </View>

                <View style={styles.form}>

                    <View style={styles.container}>

                        <View style={styles.campo}>

                            <Text style={styles.label}>
                                E-MAIL
                            </Text>

                            <View style={styles.inputContainer}>

                                <Fontisto
                                    name="email"
                                    size={22}
                                    color="#494454"
                                />

                                <TextInput
                                    placeholder="seu@email.com"
                                    placeholderTextColor="#494454"
                                    style={styles.input}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />

                            </View>

                        </View>

                        <TouchableHighlight
                            style={styles.botao}
                            underlayColor="#7548D8"
                            onPress={enviarCodigo}
                            disabled={loading}
                        >

                            <Text style={styles.textoBotao}>
                                {loading
                                    ? 'Enviando...'
                                    : 'Enviar o link de redefinição'}
                            </Text>

                        </TouchableHighlight>

                    </View>

                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#051424',
    },

    content: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },

    main: {
        width: '100%',
        alignItems: 'center',
        gap: 35,
    },

    header: {
        alignItems: 'center',
        gap: 8,
    },

    h1: {
        color: '#D0BCFF',
        fontSize: 48,
        fontWeight: '800',
    },

    h2: {
        color: '#CBC3D7',
        fontSize: 19,
    },

    form: {
        width: '88%',
        maxWidth: 450,
        backgroundColor: '#1C1926',
        borderRadius: 20,
        padding: 24,
    },

    container: {
        width: '100%',
        gap: 28,
    },

    campo: {
        gap: 10,
    },

    label: {
        color: '#CBC3D7',
        fontSize: 14,
        fontWeight: '600',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        borderWidth: 2,
        borderColor: '#494454',
        borderRadius: 15,
        paddingHorizontal: 14,
        gap: 12,
    },

    input: {
        flex: 1,
        height: '100%',
        color: '#FFFFFF',
        fontSize: 16,
    },

    botao: {
        backgroundColor: '#8B5CF6',
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        borderRadius: 12,
    },

    textoBotao: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },

});
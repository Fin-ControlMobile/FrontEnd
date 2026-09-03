import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import Fontisto from '@expo/vector-icons/Fontisto';
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useRecuperacaoSenha } from '../../hooks/useRecuperaSenha';
import { useNotificacao } from '../../hooks/useNotificacao';


export default function Redefinir() {

    const router = useRouter();
    const {notificar} = useNotificacao();
    const { email } = useLocalSearchParams<{ email?: string }>();

    const { redefinirSenha, loading } = useRecuperacaoSenha();

    const [token, setToken] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleRedefinirSenha = async () => {

        if (!email) {
            Alert.alert(
                'Erro',
                'E-mail não encontrado. Volte e solicite a recuperação novamente.'
            );
            return;
        }

        if (!token.trim()) {
            Alert.alert(
                'Atenção',
                'Digite o código recebido no seu e-mail.'
            );
            return;
        }

        if (!novaSenha) {
            Alert.alert(
                'Atenção',
                'Digite sua nova senha.'
            );
            return;
        }

        if (novaSenha.length < 8) {
            Alert.alert(
                'Atenção',
                'A senha deve ter pelo menos 6 caracteres.'
            );
            return;
        }

        if (novaSenha !== confirmarSenha) {
            Alert.alert(
                'Atenção',
                'As senhas não coincidem.'
            );
            return;
        }

        try {

            await redefinirSenha(
                email,
                token.trim(),
                novaSenha
            );

            await notificar('Sua senha foi redefinada!', 'Sua senha foi redefinada com sucesso.')
            Alert.alert(
                'Sucesso',
                'Sua senha foi redefinida com sucesso!',
                [
                    {
                        text: 'OK',
                        onPress: () => router.replace('/login')
                    }
                ]
            );
        } catch (error: any) {

            console.log(error);

            const mensagem =
                error?.response?.data ||
                'Não foi possível redefinir sua senha. Verifique o código e tente novamente.';

            Alert.alert('Erro', mensagem);
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

                        {/* E-MAIL */}

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
                                    value={email ?? ''}
                                    editable={false}
                                />

                            </View>

                        </View>


                        {/* CÓDIGO */}

                        <View style={styles.campo}>

                            <Text style={styles.label}>
                                CÓDIGO DE REDEFINIÇÃO
                            </Text>

                            <View style={styles.inputContainer}>

                                <Fontisto
                                    name="locked"
                                    size={22}
                                    color="#494454"
                                />

                                <TextInput
                                    placeholder="Digite o código recebido"
                                    placeholderTextColor="#494454"
                                    style={styles.input}
                                    value={token}
                                    onChangeText={setToken}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />

                            </View>

                        </View>


                        {/* NOVA SENHA */}

                        <View style={styles.campo}>

                            <Text style={styles.label}>
                                NOVA SENHA
                            </Text>

                            <View style={styles.inputContainer}>

                                <Fontisto
                                    name="locked"
                                    size={22}
                                    color="#494454"
                                />

                                <TextInput
                                    placeholder="Digite sua nova senha"
                                    placeholderTextColor="#494454"
                                    style={styles.input}
                                    value={novaSenha}
                                    onChangeText={setNovaSenha}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />

                            </View>

                        </View>


                        {/* CONFIRMAR SENHA */}

                        <View style={styles.campo}>

                            <Text style={styles.label}>
                                CONFIRMAR SENHA
                            </Text>

                            <View style={styles.inputContainer}>

                                <Fontisto
                                    name="locked"
                                    size={22}
                                    color="#494454"
                                />

                                <TextInput
                                    placeholder="Digite a senha novamente"
                                    placeholderTextColor="#494454"
                                    style={styles.input}
                                    value={confirmarSenha}
                                    onChangeText={setConfirmarSenha}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />

                            </View>

                        </View>


                        {/* BOTÃO */}

                        <TouchableHighlight
                            style={styles.botao}
                            underlayColor="#7548D8"
                            onPress={handleRedefinirSenha}
                            disabled={loading}
                        >

                            <Text style={styles.textoBotao}>
                                {loading
                                    ? 'Redefinindo...'
                                    : 'Redefinir senha'}
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
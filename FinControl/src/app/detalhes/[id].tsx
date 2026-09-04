import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useDetalhesTransacao } from '../../hooks/useDetalhes';
import { colors, fonts } from '../../constants/theme';

export default function Detalhes() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { transacao, dataTransacaoFormatada, valorFormatado } = useDetalhesTransacao(id);
    const router = useRouter();

    const isOutcome = transacao ? transacao.valorTransferencia < 0 : false;

    function voltar() {
        router.push('/home');
    }

    return (
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconeVoltar} onPress={voltar}>
                    <FontAwesome5 name="arrow-left" size={24} color="#D4E4FA" />
                </TouchableOpacity>
                <Text style={styles.h1}>Detalhes</Text>
            </View>

            <View style={styles.section}>
                <FontAwesome5 name="shopping-cart" size={40} color="#D0BCFF" style={styles.carrinho} />
                <Text style={styles.tipoUsuario}>{transacao?.remetente}</Text>

                <Text style={[styles.valor, isOutcome ? styles.valorSaida : styles.valorEntrada]}>
                    {valorFormatado}
                </Text>
            </View>

            <View style={styles.section}>
                <View style={styles.card}>
                    <Feather name="calendar" size={24} color="#D0BCFF" style={styles.fundoIcone} />
                    <View>
                        <Text style={styles.h2}>Data</Text>
                        <Text style={styles.conteudo}>{dataTransacaoFormatada}</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <AntDesign
                        name={isOutcome ? "arrow-up" : "arrow-down"}
                        size={24}
                        color={isOutcome ? colors.transitionRed : colors.transitionGreen}
                        style={isOutcome ? styles.saida : styles.entrada}
                    />
                    <View>
                        <Text style={styles.h2}>Tipo</Text>
                        <Text style={styles.conteudo}>
                            {isOutcome ? 'Saída' : 'Entrada'}
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <FontAwesome5 name="user-circle" size={24} color="#D0BCFF" style={styles.fundoIcone} />
                    <View>
                        <Text style={styles.h2}>Destinatário</Text>
                        <Text style={styles.conteudo}>{transacao?.destinatario}</Text>
                    </View>
                </View>

                <View style={styles.cardDescricao}>
                    <Text style={styles.h2}>Descrição</Text>
                    <View style={styles.container}>
                        <Text style={styles.descricao}>{transacao?.descricao}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.bgc,
        flex: 1,
    },

    header: {
        backgroundColor: colors.superface,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
        width: "100%",
        padding: 20,
    },

    iconeVoltar: {
        paddingVertical: 10,
        paddingHorizontal:12,
        backgroundColor: "rgba(255,255,255,0.1)",
        position: 'absolute',
        left: 20,
        borderRadius: 100,
    },

    h1: {
        color: colors.purpleEmphasis,
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Manrope_700Bold",
    },

    carrinho: {
        marginTop: 30,
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 30,
        borderRadius: 50
    },

    tipoUsuario: {
        color: colors.colorFontTile,
        fontSize: 30,
        fontFamily: fonts.manropSemiBold
    },

    usuario: {
        color: colors.purple,
        fontSize: 20
    },

    valor: {
        fontSize: 45,
        marginBottom: 20,
        fontFamily: fonts.manropBold,
    },

    valorSaida: {
        color: colors.transitionRed,
    },

    valorEntrada: {
        color: colors.transitionGreen,
    },

    section: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 30
    },

    card: {
        flexDirection: 'row',
        backgroundColor: colors.superface,
        width: '90%',
        padding: 10,
        borderRadius: 15,
        gap: 30,
        alignItems: 'center'
    },

    saida: {
        backgroundColor: '#2B1A29',
        padding: 8,
        borderRadius: 30
    },

    entrada: {
        backgroundColor: '#132B22',
        padding: 8,
        borderRadius: 30
    },

    fundoIcone: {
        backgroundColor: "rgba(255,255,255,0.1)" ,
        padding: 8,
        borderRadius: 30
    },

    h2: {
        color: colors.colorFontTile,
        fontFamily: fonts.manropSemiBold,
        fontSize: 15
    },

    conteudo: {
        color: colors.colorFont,
        fontFamily: fonts.jetBrainsRegular
    },

    cardDescricao: {
        backgroundColor: colors.superface,
        width: '90%',
        padding: 20,
        borderRadius: 15,
        gap: 10,
    },

    container: {
        backgroundColor: colors.bgc,
        padding: 15,
        borderRadius: 10
    },

    descricao: {
        color: colors.colorFont,
        fontFamily: fonts.jetBrainsRegular
    }
});
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
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
        <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 40 }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconeVoltar} onPress={voltar} activeOpacity={0.7}>
                    <FontAwesome5 name="arrow-left" size={20} color="#D4E4FA" />
                </TouchableOpacity>
                <Text style={styles.h1}>Detalhes</Text>
            </View>
            <View style={styles.sectionHeader}>
                <View style={styles.containerIconLarge}>
                    <FontAwesome5 name="shopping-cart" size={32} color="#D0BCFF" />
                </View>
                <Text style={styles.tipoUsuario}>{transacao?.remetente}</Text>

                <Text style={[styles.valor, isOutcome ? styles.outcomeText : styles.incomeText]}>
                    {valorFormatado}
                </Text>
            </View>
            <View style={styles.sectionDetails}>
                <View style={styles.containerList}>
                    <View style={styles.containerItem}>
                        <View style={styles.containerIcon}>
                            <Feather name="calendar" size={18} color="#90A4AE" />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.subTitle}>Data</Text>
                            <Text style={styles.title}>{dataTransacaoFormatada}</Text>
                        </View>
                    </View>

                    <View style={styles.line} />
                    <View style={styles.containerItem}>
                        <View style={styles.containerIcon}>
                            <AntDesign
                                name={isOutcome ? "arrow-up" : "arrow-down"}
                                size={18}
                                color={isOutcome ? colors.transitionRed : colors.transitionGreen}
                            />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.subTitle}>Tipo</Text>
                            <Text style={[styles.title, isOutcome ? styles.outcomeText : styles.incomeText]}>
                                {isOutcome ? 'Saída' : 'Entrada'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.line} />

                    <View style={styles.containerItem}>
                        <View style={styles.containerIcon}>
                            <FontAwesome5 name="user" size={18} color="#90A4AE" />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.subTitle}>Destinatário</Text>
                            <Text style={styles.title}>{transacao?.destinatario}</Text>
                        </View>
                    </View>

                    {transacao?.descricao ? (
                        <>
                            <View style={styles.line} />
                            <View style={styles.containerItem}>
                                <View style={styles.containerIcon}>
                                    <Feather name="file-text" size={18} color="#90A4AE" />
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.subTitle}>Descrição</Text>
                                    <Text style={styles.title}>{transacao.descricao}</Text>
                                </View>
                            </View>
                        </>
                    ) : null}
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
        paddingHorizontal: 12,
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

    sectionHeader: {
        alignItems: 'center',
        marginBottom: 25,
        gap: 12,
    },

    containerIconLarge: {
        backgroundColor: "rgba(255,255,255, 0.1)",
        padding: 24,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },

    tipoUsuario: {
        color: colors.colorFontTile,
        fontSize: 22,
        fontFamily: fonts.manropSemiBold,
    },

    valor: {
        fontSize: 36,
        fontFamily: fonts.manropBold,
    },

    sectionDetails: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },

    /* Estilização padronizada com o MovementItem e RecentMovements */
    containerList: {
        width: "100%",
        backgroundColor: colors.superface,
        borderRadius: 30,
        padding: 20,
        alignItems: "center",
    },

    containerItem: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingVertical: 12,
    },

    containerIcon: {
        backgroundColor: "rgba(255,255,255, 0.1)",
        padding: 12,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
    },

    details: {
        flex: 1,
    },

    title: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.colorFontTile,
        fontSize: 15,
        marginTop: 2,
    },

    subTitle: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.colorFont,
        fontSize: 13,
    },

    outcomeText: {
        color: colors.transitionRed,
    },

    incomeText: {
        color: colors.transitionGreen,
    },

    line: {
        height: 1,
        width: "100%",
        backgroundColor: "rgba(255,255,255, 0.1)",
    },
});
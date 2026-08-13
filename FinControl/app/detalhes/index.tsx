import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Detalhes() {
    return (
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconeVoltar} >
                    <FontAwesome5 name="arrow-left" size={24} color="#D4E4FA" />
                </TouchableOpacity>
                <Text style={styles.h1}>Detalhes</Text>
            </View>
            <View style={styles.section}>
                <FontAwesome5 name="shopping-cart" size={40} color="#D0BCFF" style={styles.carrinho} />
                <Text style={styles.tipoUsuario}>Mercado</Text>
                <Text style={styles.usuario}>Supermarket &  Groceries</Text>
                <Text style={styles.valor}>- R$ 245,80</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.card}>
                    <Feather name="calendar" size={24} color="#D0BCFF" style={styles.fundoIcone} />
                    <View>
                        <Text style={styles.h2}>Data</Text>
                        <Text style={styles.conteudo}>12 Outubro 2023, 14:30</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <AntDesign name="arrow-up" size={24} color="#FFB4AB" style={styles.saida} />
                    <View>
                        <Text style={styles.h2}>Tipo</Text>
                        <Text style={styles.conteudo}>Saída</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <FontAwesome5 name="user-circle" size={24} color="#D0BCFF" style={styles.fundoIcone}></FontAwesome5>
                    <View>
                        <Text style={styles.h2}>Destinatário</Text>
                        <Text style={styles.conteudo}>Alimentaçao</Text>
                    </View>
                </View>
                <View style={styles.cardDescricao}>
                    <Text style={styles.h2}>Descrição</Text>
                    <View style={styles.container}>
                        <Text style={styles.descricao}>Compras semanais, incluindo produtos frescos, laticínios e itens essenciais para a casa. Recibo anexado ao e-mail.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#051424',
        flex: 1,
    },


    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
    },

    iconeVoltar: {
        padding: 7,
        backgroundColor: '#273647',
        position: 'absolute',
        left: 20,
        borderRadius: 100,
        width: 38
    },

    h1: {
        color: "#d4e4fa",
        fontSize: 20
    },

    carrinho: {
        marginTop: 30,
        backgroundColor: '#1C2B3C',
        padding: 30,
        borderRadius: 50
    },

    tipoUsuario: {
        color: '#D4E4FA',
        fontSize: 30
    },

    usuario: {
        color: '#CBC3D7',
        fontSize: 20
    },

    valor: {
        color: '#D0BCFF',
        fontSize: 45,
        marginBottom: 20
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
        backgroundColor: '#122131',
        width: '90%',
        padding: 10,
        borderRadius: 15,
        gap: 30

    },

    saida: {
        backgroundColor: '#2B1A29',
        padding: 8,
        borderRadius: 30
    },


    fundoIcone: {
        backgroundColor: '#1C2B3C',
        padding: 8,
        borderRadius: 30
    },

    h2: {
        color: '#CBC3D7'
    },

    conteudo: {
        color: '#D4E4FA'
    },

    cardDescricao: {
        backgroundColor: '#122131',
        width: '90%',
        padding: 20,
        borderRadius: 15,
        gap: 10,
    },

    container: {
        backgroundColor: '#010F1F',
        padding: 15,
        borderRadius: 10
    },

    descricao: {
        color: '#D4E4FA'
    }
})
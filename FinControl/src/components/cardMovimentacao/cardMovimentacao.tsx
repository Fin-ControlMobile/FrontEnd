import { Image, StyleSheet, Text, View } from "react-native";


export default function CardMovimentacao() {
    return (
        <View style={styles.card}>
            <View style={styles.areaIcone}>
                <Image source={require('../../../assets/imgs/Overlay.png')} style={styles.icone} />
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.estabelecimento}>Supermercado Extra</Text>
                <Text style={styles.data}>09:42 Alimentacao</Text>
            </View>
            <View>
                <Text style={styles.preco}>-R$ 145,00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#0D1C2D',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 0.9,
        padding: '2%',
        flexDirection: 'row',
        gap: '10%'
    },
    preco: {
        color: '#00A572'
    },
    data: {
        color: '#D4E4FA'
    },
    estabelecimento: {
        color: '#D4E4FA'
    }
    ,
    areaIcone:{
        width: '10%'
    },
    icone:{

    },
    infoCard:{
        width: '45%'
    }
})
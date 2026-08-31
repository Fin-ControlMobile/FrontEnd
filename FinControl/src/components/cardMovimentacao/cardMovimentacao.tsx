import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../../constants/theme";


export default function CardMovimentacao() {
    return (
        <View style={styles.card}>
            <View style={styles.areaIcone}>
                <Image source={require('../../../assets/imgs/Overlay.png')} style={styles.icone} />
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.estabelecimento}>Supermercado Extra</Text>
                <Text style={styles.data}>09:42 . Alimentacao</Text>
            </View>
            <View>
                <Text style={styles.preco}>-R$ 145,00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.superface,
        width: '100%',
        height: '25%',
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
        color: colors.transitionGreen,
        fontFamily: fonts.manropExtraBold
    },
    data: {
        color: colors.gray,
        opacity: 0.4,
        fontFamily: fonts.jetBrainsRegular
    },
    estabelecimento: {
        color: colors.gray,
        fontFamily: fonts.manropSemiBold
    }
    ,
    areaIcone:{
        width: '10%'
    },
    icone:{
        width: '100%'
    },
    infoCard:{
        width: '45%',

    }
})
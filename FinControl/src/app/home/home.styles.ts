import { StyleSheet } from "react-native"
import { colors, fonts } from "../../const/const"

export const styles = StyleSheet.create({

    container: {
        justifyContent: "space-between",
        backgroundColor: colors.bgc,
        flex: 1
    },

    containerMain: {
        backgroundColor: colors.bgc,
        padding: 20
    },

    containerBalance: {
        width: "100%",
        backgroundColor: colors.purpleEmphasis,
        borderRadius: 10,
        padding: 20
    },

    title: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.purple,
        fontSize: 20
    },

    containerMoney:{
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    money: {
        color: colors.white,
        fontFamily: fonts.manropExtraBold,
        fontSize: 45,
    },
})
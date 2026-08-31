import { StyleSheet } from "react-native"
import { colors, fonts } from "../constants/theme"

export const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.bgc,
        alignItems: 'center'
    },

    containerMain: {
        backgroundColor: colors.bgc,
        paddingHorizontal: 20
        
    },

    containerBalance: {
        backgroundColor: colors.purpleEmphasis,
        borderRadius: 10,
        padding: 20
    },

    BalanceTitle: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.purple,
        fontSize: 20
    },

    containerMoney: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    money: {
        color: colors.white,
        fontFamily: fonts.manropExtraBold,
        fontSize: 45,
    },

    line: {
        height: 1,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.3)",

    },

    lineVertical: {
        height: "100%",
        width: 1,
        backgroundColor: "rgba(255,255,255, 0.3)",
    },

    containerIcon: {
        backgroundColor: "rgba(255,255,255, 0.1)",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },

    containerTransitions: {
        marginTop: 15,
        flexDirection: "row",
        gap: 10,
        width: "100%",
        justifyContent: "center"
    },

    transitions: {
        width: "49%",
        flexDirection: "row",
        gap: 15,
        justifyContent: "center"
    },

    transitionsTitle: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.white,
        opacity: .8
    },

    transitionsSubTitle: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.white,
        fontSize: 13
    },


    MovementHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 25
    },

    MovementTitle: {
        fontFamily: fonts.manropBold,
        color: colors.colorFont,
        fontSize: 25
    },

    MovementSubTitle: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.purpleEmphasis,
        fontSize: 15
    },

    containerFooter: {
        backgroundColor: colors.bgc
    }
})
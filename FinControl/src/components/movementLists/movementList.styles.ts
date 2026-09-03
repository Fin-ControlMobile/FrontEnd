import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/theme";

export const styles = StyleSheet.create({
    containerList: {
        backgroundColor: colors.superface,
        borderRadius: 30,
        padding: 20,
        alignItems: "center"
    },
    containerItem: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15

    },

    transferDetails: {
        flexDirection: "row",
        gap: 10
    },

    containerIcon: {
        backgroundColor: "rgba(255,255,255, 0.1)",
        padding: 12,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },

    details: {
        gap: 5
    },

    title: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.colorFontTile,
        fontSize: 15
    },

    subTitle: {
        fontFamily: fonts.jetBrainsRegular,
        color: colors.colorFont,
        fontSize: 13
    },

    money: {
        fontFamily: fonts.jetBrainsRegular,
        fontSize: 15,
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

})
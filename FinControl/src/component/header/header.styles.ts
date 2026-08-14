import { StyleSheet } from "react-native";
import { colors, fonts } from "../../const/const";

export const styles = StyleSheet.create({
    container: {
        height: "10%",
        width: "100%",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
    },

    featuredSource: {
        fontSize: 15,
        fontFamily: fonts.jetBrainsRegular,
        color: colors.purpleEmphasis
    },

    secondarySource: {
        fontSize: 17,
        fontFamily: fonts.jetBrainsRegular,
        color: colors.gray
    }
})  
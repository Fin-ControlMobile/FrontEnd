import { StyleSheet } from "react-native";
import { colors, fonts } from "../../const/const";

export const styles = StyleSheet.create({
    container: {
        height: "10%",
        width: "100%",
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
    },

    featuredSource: {
        fontSize: 25,
        fontFamily: fonts.jetBrainsRegular,
        color: colors.purpleEmphasis
    },

    secondarySource: {
        fontSize: 20,
        fontFamily: fonts.jetBrainsRegular,
        color: colors.gray
    }
})  
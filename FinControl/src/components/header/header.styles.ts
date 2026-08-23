import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "100%",
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
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
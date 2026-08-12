import { StyleSheet } from 'react-native';
import { colors } from '../../constants/theme';


export const styles = StyleSheet.create({   
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: "10%",
        alignItems: "center",
        backgroundColor: colors.superface,
        borderTopEndRadius:40,
        borderTopStartRadius:40
    },

    activeItemContainer: {
        backgroundColor: colors.purpleEmphasis,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    activeItem: {
        color: colors.purpleEmphasis
    },

})
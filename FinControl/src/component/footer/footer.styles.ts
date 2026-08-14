import { StyleSheet } from 'react-native';
import { colors } from '../../const/const';

export const styles = StyleSheet.create({   
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: "10%",
        alignItems: "center",
        backgroundColor: colors.superface,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        maxHeight: "15%"
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
        color: colors.purple
    },


})
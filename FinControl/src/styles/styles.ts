import { StyleSheet } from "react-native"
import { colors, Text, Title } from "../constants/theme"


export const styles = StyleSheet.create({
    background: {
       flex: 1,
       backgroundColor: colors.bgc,
       justifyContent: "center"
    },
    titleLogin: {
        alignItems: 'center',
    },
    textTitle:{
        ...Title,
        color: colors.purpleTitleColor,
    },
    articleEmail:{
        margin: 10
    },
    textLogin: {
        ...Text,
        color: colors.colorFont,
        fontSize: 16,
        marginBottom: 8
    },
    articleLogin: {
        backgroundColor: colors.superface,
        margin:20,
        padding:20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.loginBorderColor
    },
    icon:{
        marginLeft: 10
    },
    inputLogin: {
        borderRadius: 10,
        borderColor: colors.loginBorderColor,
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'white',
    },
    buttonLogin: {
        backgroundColor: colors.purpleTitleColor,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        margin: 12
    },
    textButton: {
        ...Text,
        color: colors.purple,
        padding: 3,
    },
    Register:{
        flexDirection: 'row',
        alignContent:'center',
        justifyContent: 'center',
        padding: 5,
        margin: 10
    },
    textRegister: {
        ...Text,
        color: colors.purpleTitleColor,
    },
    textTitleBiometric:{
        ...Title,
        color: colors.colorFontTile
    },
    imgBiometric:{
        alignSelf:"center"
    },
    biometricButton:{
        marginVertical: 40
    }



})
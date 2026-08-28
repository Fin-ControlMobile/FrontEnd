import { StyleSheet } from "react-native"
import { Colors, Text, Title } from "../constants/theme"


export const styles = StyleSheet.create({
    background: {
       flex: 1,
       backgroundColor: Colors.backgroundColor,
       justifyContent: "center"
    },
    titleLogin: {
        alignItems: 'center',
    },
    textTitle:{
        ...Title,
        color: Colors.purpleTitleColor,
    },
    articleEmail:{
        margin: 15
    },
    textLogin: {
        ...Text,
        color: Colors.textColor,
        fontSize: 16,
        marginBottom: 10,
    },
    articleLogin: {
        backgroundColor: Colors.articleColor,
        margin:18,
        padding:15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Colors.loginBorderColor,
    },
    icon:{
        marginLeft: 10
    },
    inputLogin: {
        borderRadius: 10,
        borderColor: Colors.loginBorderColor,
        borderWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 55
    },
    buttonLogin: {
        backgroundColor: Colors.purpleTitleColor,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        margin: 15,
        marginTop: 35
    },
    textButton: {
        ...Text,
        color: Colors.textButtonColor,
        padding: 3,
    },
    Register:{
        flexDirection: 'row',
        alignContent:'center',
        justifyContent: 'center',
        padding: 2,
        margin: 8
    },
    textRegister: {
        ...Text,
        textAlign:"center",
        color: Colors.purpleTitleColor,
    },
    textTitleBiometric:{
        ...Title,
        textAlign:"center",
        color: Colors.whiteTitleColor
    },
    imgBiometric:{
        alignSelf:"center"
    },
    biometricButton:{
        marginVertical: 40
    },
    textLoginBiometria: {
        ...Text,
        color: Colors.textColor,
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center"
    },
})
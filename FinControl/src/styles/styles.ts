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
        margin: 10
    },
    textLogin: {
        ...Text,
        color: Colors.textColor,
        fontSize: 16,
        marginBottom: 8
    },
    articleLogin: {
        backgroundColor: Colors.articleColor,
        margin:20,
        padding:20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Colors.loginBorderColor
    },
    icon:{
        marginLeft: 10
    },
    inputLogin: {
        borderRadius: 10,
        borderColor: Colors.loginBorderColor,
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
        
    },
    buttonLogin: {
        backgroundColor: Colors.purpleTitleColor,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        margin: 12
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
        padding: 5,
        margin: 10
    },
    textRegister: {
        ...Text,
        color: Colors.purpleTitleColor,
    },
    textTitleBiometric:{
        ...Title,
        color: Colors.whiteTitleColor
    },
    imgBiometric:{
        alignSelf:"center"
    },
    biometricButton:{
        marginVertical: 40
    }



})
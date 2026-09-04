import { StyleSheet } from "react-native"
import { Colors, colors, TextRegular, Title } from "../constants/theme"


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
        ...TextRegular,
        color: Colors.whiteTitleColor,
        fontSize: 16,
        marginBottom: 15,
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
        borderColor: 'rgba(208, 188, 255, 0.5)',
        borderWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 55,
        color: Colors.purpleTitleColor
    },
    buttonLogin: {
        backgroundColor: Colors.colorButton,
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        margin: 16,
        marginTop: 25, 
    },
    textButton: {
        ...TextRegular,
        color: Colors.whiteTitleColor,
        padding: 3,
    },
    Register:{
        flexDirection: 'row',
        alignContent:'center',
        justifyContent: 'center',
        padding: 2,
        margin: 10,
        marginTop:20
    },
    RegisterAccess:{
        alignContent:'center',
        justifyContent: 'center',
        padding: 2,
        margin: 10
    },
    textRegister: {
        ...TextRegular,
        fontSize: 14,
        textAlign: "center",
        color: Colors.purpleTitleColor,
    },
    textRedirect:{
        ...TextRegular,
        color: Colors.textColor,
        marginBottom: 10,
        fontSize: 14,
        textAlign:"center"
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
        ...TextRegular,
        padding: 10,
        color: Colors.textColor,
        fontSize: 16,
        marginBottom: 15,
        textAlign: "center"
    },
    textAccess:{
        ...TextRegular,
        padding:5,
        color: Colors.textColor,
        fontSize: 14,
        textAlign: "center"
    }
})
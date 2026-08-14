import * as LocalAuthentication from 'expo-local-authentication' 


function ExisteBiometria() {
    LocalAuthentication.hasHardwareAsync()
}
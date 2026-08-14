// src/utils/biometrics.ts
import * as LocalAuthentication from 'expo-local-authentication';

export async function checkBiometricCompatibility(): Promise<boolean> {
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  const isEnrolled = await LocalAuthentication.isEnrolledAsync();
  return hasHardware && isEnrolled;
}

export async function authenticateUser(message: string = 'Autentique-se para continuar'): Promise<boolean> {
  try {
    const result = await LocalAuthentication.authenticateAsync({
      disableDeviceFallback: true,
      promptMessage: message,
    });
    return result.success;
  } catch (error) {
    console.error('Biometric authentication error:', error);
    return false;
  }
}

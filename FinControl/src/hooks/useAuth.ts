// src/hooks/useBiometrics.ts
import { useState, useEffect } from 'react';
import { checkBiometricCompatibility, authenticateUser } from '../services/auth/biometricService';

export function useBiometrics() {
  const [isCompatible, setIsCompatible] = useState<boolean>(false);
  const [checkingHardware, setCheckingHardware] = useState<boolean>(true);

  useEffect(() => {
    async function checkDevice() {
      const compatible = await checkBiometricCompatibility();
      setIsCompatible(compatible);
      setCheckingHardware(false);
    }
    checkDevice();
  }, []);

  const triggerAuth = async (message: string) => {
    return await authenticateUser(message);
  };

  return { isCompatible, checkingHardware, triggerAuth };
}

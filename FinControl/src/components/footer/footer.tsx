import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './footer.styles';
import { colors } from '../../constants/theme';
import { useRouter } from 'expo-router';

type TabName = 'bank' | 'wallet' | 'shield';

interface FooterProps {
  navigation?: {
    navigate: (screenName: string) => void;
  };
}

export default function Footer({ navigation }: FooterProps) {
  const [activeTab, setActiveTab] = useState<TabName>();
  const router = useRouter();
  const [selecao, setSelecao] = useState<number>(0);
  
  // Captura as margens seguras do dispositivo
  const insets = useSafeAreaInsets();

  const handleTabPress = (tabName: TabName) => {
    setActiveTab(tabName);
    navigation?.navigate(tabName);
  };

  return (
    <View 
      style={[
        styles.container, 
        { paddingBottom: Math.max(insets.bottom, 12) }
      ]}
    >
      {/* Item 1: Banco */}
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeTab === 'bank' && styles.activeItemContainer,
        ]}
        onPress={() => {
          handleTabPress('bank');
          setSelecao(0);
          router.push("/home");
        }}
      >
        <AntDesign
          name="bank"
          size={30}
          color={activeTab === 'bank' ? colors.purpleEmphasis : '#958EA0'}
        />
      </TouchableOpacity>

      {/* Item 2: Carteira */}
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeTab === 'wallet' && styles.activeItemContainer,
        ]}
        onPress={() => {
          handleTabPress('wallet');
          router.push("/movimentacoes");
          setSelecao(1);
        }}
      >
        <MaterialCommunityIcons
          name="wallet-outline"
          size={30}
          color={activeTab === 'wallet' ? colors.purpleEmphasis : '#958EA0'}
        />
      </TouchableOpacity>

      {/* Item 3: Escudo */}
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeTab === 'shield' && styles.activeItemContainer,
        ]}
        onPress={() => {
          handleTabPress('shield');
          router.push("/seguranca");
          setSelecao(2)
        }}
      >
        <Ionicons
          name="shield-outline"
          size={30}
          color={activeTab === 'shield' ? colors.purpleEmphasis : '#958EA0'}
        />
      </TouchableOpacity>
    </View>
  );
}
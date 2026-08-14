import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './footer.styles';
import { colors } from '../../const/const';

type TabName = 'bank' | 'wallet' | 'shield';

interface FooterProps {
  navigation?: {
    navigate: (screenName: string) => void;
  };
}

export default function Footer({ navigation }: FooterProps) {
  const [activeTab, setActiveTab] = useState<TabName>('bank');
  
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
        { paddingBottom: Math.max(insets.bottom, 12) } // Aplica a safe area + padding mínimo
      ]}
    >
      {/* Item 1: Banco */}
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeTab === 'bank' && styles.activeItemContainer,
        ]}
        onPress={() => handleTabPress('bank')}
      >
        <AntDesign
          name="bank"
          size={30}
          color={activeTab === 'bank' ? colors.purple : '#958EA0'}
        />
      </TouchableOpacity>

      {/* Item 2: Carteira */}
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeTab === 'wallet' && styles.activeItemContainer,
        ]}
        onPress={() => handleTabPress('wallet')}
      >
        <MaterialCommunityIcons
          name="wallet-outline"
          size={30}
          color={activeTab === 'wallet' ? colors.purple : '#958EA0'}
        />
      </TouchableOpacity>

      {/* Item 3: Escudo */}
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeTab === 'shield' && styles.activeItemContainer,
        ]}
        onPress={() => handleTabPress('shield')}
      >
        <Ionicons
          name="shield-outline"
          size={30}
          color={activeTab === 'shield' ? colors.purple : '#958EA0'}
        />
      </TouchableOpacity>
    </View>
  );
}
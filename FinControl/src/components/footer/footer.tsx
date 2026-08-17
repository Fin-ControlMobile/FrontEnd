import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './footer.styles';
import { colors } from '../../constants/theme';
import { useRouter } from 'expo-router';

// Exportamos o tipo para poder usar nas telas pai
export type TabName = 'bank' | 'wallet' | 'shield';

interface FooterProps {
  activeTab: TabName; // Prop para definir qual ícone deve ficar ativo
  onTabPress?: (tabName: TabName) => void; // Função opcional para callback ao clicar
  navigation?: {
    navigate: (screenName: string) => void;
  };
}

export default function Footer({ activeTab, onTabPress, navigation }: FooterProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const handleTabPress = (tabName: TabName) => {
    // Chama a função da prop caso seja passada
    if (onTabPress) {
      onTabPress(tabName);
    }

    // Navega para a tela
    navigation?.navigate(tabName);
  };

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 },
      ]}
    >
      {/* Item 1: Banco */}
      <TouchableOpacity
        style={[
          styles.itemContainer,
          activeTab === 'bank' && styles.activeItemContainer,
        ]}
        onPress={() => {
          handleTabPress('bank')
          router.push("/home")
        }}
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
        onPress={() => {
          handleTabPress('wallet')
          router.push("/movimentacoes")
        }}
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
        onPress={() => {
          handleTabPress('shield')
          router.push("/seguranca")
        }
        }
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
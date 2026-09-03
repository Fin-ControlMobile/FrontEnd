import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MovementItem } from './movementItem';
import { GroupedSection } from '../../@types/movementLists';
import { colors, fonts } from '../../constants/theme';

interface Props {
  sections: GroupedSection[];
  onItemPress?: (id: string) => void;
  onFilterPress?: () => void;
}

type FiltroTipo = 'todas' | 'recentes' | 'ontem' | 'recebidas' | 'enviadas';

const FILTROS: { key: FiltroTipo; label: string }[] = [
  { key: 'todas', label: 'Todas' },
  { key: 'recentes', label: 'Recentes' },
  { key: 'ontem', label: 'Ontem' },
  { key: 'recebidas', label: 'Recebidas' },
  { key: 'enviadas', label: 'Enviadas' },
];

export function MovementsScreen({ sections, onItemPress, onFilterPress }: Props) {

  const [pesquisa, setPesquisa] = useState<string>("");
  const [filtro, setFiltro] = useState<FiltroTipo>('todas');
  const [modalAberto, setModalAberto] = useState<boolean>(false);

  //memo eh um Rook que salva o cache do react
  const movimentacoesFiltradas = useMemo(() => {

    let resultado = sections.map(section => ({
      //pega tudo que tem na section e sobrescreve o data
      ...section,
      data: section.data.filter(item =>
        item.title.toLowerCase().includes(pesquisa.toLowerCase())),
    }))
      .filter((section) => section.data.length > 0);

    switch (filtro) {
      case 'ontem':
        return resultado.filter(section => section.title === 'Ontem');

      case 'recentes': {
        const todosItens = resultado.flatMap(section => section.data);
        const tresRecentes = todosItens.slice(0, 5);
        return tresRecentes.length > 0 ? [{ title: 'Recentes', data: tresRecentes }] : [];
      }

      case 'recebidas':
        return resultado.map(section => ({
          ...section,
          data: section.data.filter(item => item.type === 'income'),
        })).filter(section => section.data.length > 0);

      case 'enviadas':
        return resultado.map(section => ({
          ...section,
          data: section.data.filter(item => item.type === 'outcome'),
        })).filter(section => section.data.length > 0);

      case 'todas':
      default:
        return resultado;
    }
  }, [sections, pesquisa, filtro]);

  function selecionarFiltro(key: FiltroTipo) {
    setFiltro(key);
    setModalAberto(false); // fecha o popup ao escolher
  }

  return (
    <>
      <FlatList
        data={movimentacoesFiltradas}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.containerList}
        ListHeaderComponent={
          <View style={styles.containerHeader}>
            <View style={styles.containerSearch}>
              <FontAwesome5 name="search" size={16} color="#8E8E93" />
              <TextInput
                placeholder="Buscar movimentações..."
                placeholderTextColor="#8E8E93"
                style={styles.inputSearch}
                value={pesquisa}
                onChangeText={setPesquisa}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonFilter}
              onPress={() => setModalAberto(true)}
            >
              <FontAwesome5 name="sliders-h" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item: section }) => (
          <View style={styles.containerSection}>
            <Text style={styles.titleSection}>{section.title}</Text>
            <View style={styles.containerCard}>
              {section.data.map((item, index) => (
                <React.Fragment key={item.id}>
                  <MovementItem data={item} />
                  {index < section.data.length - 1 && <View style={styles.line} />}
                </React.Fragment>
              ))}
            </View>
          </View>
        )}
      />

<Modal
  visible={modalAberto}
  transparent
  animationType="fade"
  onRequestClose={() => setModalAberto(false)}
>
  <Pressable style={styles.overlay} onPress={() => setModalAberto(false)}>
    <View style={styles.menuFiltros}>
      <FlatList
        data={FILTROS}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.opcaoFiltro, filtro === item.key && styles.opcaoFiltroAtiva]}
            onPress={() => selecionarFiltro(item.key)}
          >
            <Text style={[styles.opcaoTexto, filtro === item.key && styles.opcaoTextoAtivo]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  </Pressable>
</Modal>
    </>
  );
}

export const styles = StyleSheet.create({
  containerList: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: colors.bgc,
    flexGrow: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
    gap: 12,
  },
  containerSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.superface,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    gap: 10,
  },
  inputSearch: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
  },
  buttonFilter: {
    backgroundColor: colors.superface,
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'flex-start',
},
menuFiltros: {
  marginTop: 100,
  backgroundColor: colors.superface,
  width: '100%',
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
  paddingVertical: 8,
},
opcaoFiltro: {
  paddingVertical: 14,
  paddingHorizontal: 20,
},
opcaoFiltroAtiva: {
  backgroundColor: colors.bgc,
},
opcaoTexto: {
  color: '#8E8E93',
  fontSize: 15,
},
opcaoTextoAtivo: {
  color: '#D0BCFF',
  fontWeight: '600',
},
containerChips: {
  flexGrow: 1,          
  justifyContent: 'space-between', 
  paddingHorizontal: 16,
},
chip: {
  backgroundColor: colors.bgc,
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderRadius: 20,

},
  chipAtivo: {
    backgroundColor: '#D0BCFF',
  },
  chipText: {
    color: '#8E8E93',
    fontSize: 13,
  },
  chipTextAtivo: {
    color: '#051424',
    fontWeight: '600',
  },
  containerSection: {
    marginBottom: 20,
  },
  titleSection: {
    fontFamily: fonts.manropBold,
    color: colors.colorFont,
    fontSize: 17,
    paddingBottom: 10
  },
  containerCard: {
    backgroundColor: colors.superface,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  line: {
    height: 1,
    backgroundColor: '#1E2D40',
  },
});
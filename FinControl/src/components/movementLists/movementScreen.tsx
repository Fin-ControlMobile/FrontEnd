import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MovementItem } from './movementItem';
import { GroupedSection } from '../../@types/movementLists';
import { colors, fonts } from '../../constants/theme';

interface Props {
  sections: GroupedSection[];
  onItemPress?: (id: string) => void;
  onFilterPress?: () => void;
}

export function MovementsScreen({ sections, onItemPress, onFilterPress }: Props) {
  return (
    <FlatList
      data={sections}
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
            />
          </View>
          <TouchableOpacity style={styles.buttonFilter} onPress={onFilterPress}>
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
                <MovementItem data={item} onPress={() => onItemPress?.(item.id)} />
                {index < section.data.length - 1 && <View style={styles.line} />}
              </React.Fragment>
            ))}
          </View>
        </View>
      )}
    />
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
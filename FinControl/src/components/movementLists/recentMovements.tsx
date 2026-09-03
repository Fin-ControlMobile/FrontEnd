import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MovementItem } from './movementItem';
import { styles } from './movementList.styles';
import { Movement } from '../../@types/movementLists';

interface Props {
  data: Movement[];
  onItemPress?: (id: string) => void;
}

export function RecentMovements({ data, onItemPress }: Props) {
  const recentData = data.slice(0, 4);

  return (
    <View style={styles.containerList}>
      {recentData.map((item, index) => (
        <React.Fragment key={item.id}>
          <MovementItem data={item} onPress={() => onItemPress?.(item.id)} />
          {index < recentData.length - 1 && <View style={styles.line} />}
        </React.Fragment>
      ))}
    </View>
  );
}


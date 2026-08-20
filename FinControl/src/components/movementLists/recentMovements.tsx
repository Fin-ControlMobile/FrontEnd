import React from 'react'
import { View } from 'react-native'
import { recentMovementsProps } from '../../@types/movementLists';
import { MovementItem } from './movementItem';
import { styles } from './movementList.styles';

export function RecentMovements({ data, onItemPress }: recentMovementsProps) {
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

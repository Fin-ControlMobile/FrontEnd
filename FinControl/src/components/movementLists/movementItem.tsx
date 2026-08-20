import { FontAwesome5 } from '@expo/vector-icons'
import { styles } from './movementList.styles'
import { Text, TouchableOpacity, View } from 'react-native'
import { MovementItemProps } from '../../@types/movementItem';

export function MovementItem({ data, onPress }: MovementItemProps) {
  const isOutcome = data.type === 'outcome';

  return (
    <TouchableOpacity 
      style={styles.containerItem} 
      onPress={onPress} 
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.transferDetails}>
        <View style={styles.containerIcon}>
          <FontAwesome5 name={data.icon as any} size={20} color="#D4E4FA" />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subTitle}>{data.subtitle}</Text>
        </View>
      </View>
      <Text style={[styles.money, isOutcome && styles.outcomeText]}>
        {isOutcome ? `- ${data.amount}` : `+ ${data.amount}`}
      </Text>
    </TouchableOpacity>
  );
}

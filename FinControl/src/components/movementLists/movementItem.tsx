import { FontAwesome5 } from '@expo/vector-icons'
import { styles } from './movementList.styles'
import { Text, TouchableOpacity, View } from 'react-native'
import { MovementItemProps } from '../../@types/movementLists';

export function MovementItem({ data, onPress }: MovementItemProps) {
  const isOutcome = data.type === 'outcome';

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      disabled={!onPress}
    >
      <View style={styles.transferDetails}>
        <View style={styles.containerIcon}>
          <FontAwesome5 name={data.icon} size={18} color="#90A4AE" />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
          <Text style={styles.subTitle}>{data.subtitle}</Text>
        </View>
      </View>
      <Text style={[styles.money, isOutcome ? styles.outcomeText : styles.incomeText]}>
        {isOutcome ? `- ${data.amount}` : `+ ${data.amount}`}
      </Text>
    </TouchableOpacity>
  );
}
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Movement } from '../../@types/movementLists';
import { styles } from './movementList.styles';
import { router } from 'expo-router';

interface MovementItemProps {
  data: Movement;
}

export function MovementItem({ data}: MovementItemProps) {
  const isOutcome = data.type === 'outcome';

  function direcionarDetalhes(){
    console.log(data.id)
    router.push(`/detalhes/${data.id}`);
  }

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={direcionarDetalhes}
      activeOpacity={0.7}
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
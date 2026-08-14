import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './movementList.styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function MovementList() {
    return (
        <View style={styles.containerList}>
            <View style={styles.containerItem}>
                <View style={styles.transferDetails}>
                    <View style={styles.containerIcon}>
                        <FontAwesome5 name="user-circle" size={30} color="#D4E4FA" />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>Salário</Text>
                        <Text style={styles.subTitle}>Hoje, 09:00</Text>
                    </View>
                </View>
                <Text style={styles.money}>+R$ 3.500,00</Text>
            </View>
           <View style={styles.line}></View>
           
           <View style={styles.containerItem}>
                <View style={styles.transferDetails}>
                    <View style={styles.containerIcon}>
                        <FontAwesome5 name="user-circle" size={30} color="#D4E4FA" />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>Salário</Text>
                        <Text style={styles.subTitle}>Hoje, 09:00</Text>
                    </View>
                </View>
                <Text style={styles.money}>+R$ 3.500,00</Text>
            </View>
           <View style={styles.line}></View>
           <View style={styles.containerItem}>
                <View style={styles.transferDetails}>
                    <View style={styles.containerIcon}>
                        <FontAwesome5 name="user-circle" size={30} color="#D4E4FA" />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>Salário</Text>
                        <Text style={styles.subTitle}>Hoje, 09:00</Text>
                    </View>
                </View>
                <Text style={styles.money}>+R$ 3.500,00</Text>
            </View>
           <View style={styles.line}></View>
           <View style={styles.containerItem}>
                <View style={styles.transferDetails}>
                    <View style={styles.containerIcon}>
                        <FontAwesome5 name="user-circle" size={30} color="#D4E4FA" />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>Salário</Text>
                        <Text style={styles.subTitle}>Hoje, 09:00</Text>
                    </View>
                </View>
                <Text style={styles.money}>+R$ 3.500,00</Text>
            </View>
        </View>
    )
}

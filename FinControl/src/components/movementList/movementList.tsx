import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './movementList.styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

export default function MovementList() {
    const router = useRouter();

    function acessarDetalhes(){
        router.push('/detalhes')
    }

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
           
           <TouchableOpacity style={styles.containerItem} onPress={acessarDetalhes}> 
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
            </TouchableOpacity>
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

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './footer.styles';

export default function Footer() {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.activeItemContainer}>
                    <AntDesign style={styles.activeItem} name="bank" size={30} color="#958EA0" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="wallet-outline" size={30} color="#958EA0" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="shield-outline" size={30} color="#958EA0" />
                </TouchableOpacity>
            </View>
        </>
    )
}

import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './home.styles'
import Footer from '../../component/footer/footer'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MovementList from '../../component/movementList/movementList';
import Header from '../../component/header/header';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.containerMain}>
          <Header />
          <View style={styles.containerBalance}>
            <View>
              <Text style={styles.BalanceTitle}>Saldo disponível</Text>
              <View style={styles.containerMoney}>
                <Text style={styles.money}>R$ 5.240,80</Text>
                <Ionicons name="eye-outline" size={24} color="white" />
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.containerTransitions} >
              <View style={styles.transitions}>
                <View style={styles.containerIcon}>
                  <FontAwesome6 name="arrow-up" size={24} color="white" />
                </View>
                <View>
                  <Text style={styles.transitionsTitle}>Entradas</Text>
                  <Text style={styles.transitionsSubTitle}>R$ 4.350,00</Text>
                </View>
              </View>
              <View style={styles.lineVertical}></View>
              <View style={styles.transitions}>
                <View style={styles.containerIcon}>
                  <FontAwesome6 name="arrow-up" size={24} color="white" />
                </View>
                <View>
                  <Text style={styles.transitionsTitle}>Saídas</Text>
                  <Text style={styles.transitionsSubTitle}>R$ 4.350,00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerMovement}>
            <View style={styles.MovementHeader}>
              <View>
                <Text style={styles.MovementTitle}>Movimentações</Text>
                <Text style={styles.MovementTitle}>recentes</Text>
              </View>
              <View>
                <Text style={styles.MovementSubTitle}>Ver</Text>
                <Text style={styles.MovementSubTitle}>todas</Text>
              </View>
            </View>
            <MovementList />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.containerFooter}>
        <Footer />
      </View>
    </>
  )
}



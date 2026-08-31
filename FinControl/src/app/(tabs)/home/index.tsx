import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../../styles/home.styles'
import Footer from '../../../components/footer/footer'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MovementList from '../../../components/movementList/movementList';
import Header from '../../../components/header/header';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';


export default function Home() {
  const router = useRouter();

  function acessar(){
    router.push('/movimentacoes')
  }

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
          <View>
            <View style={styles.MovementHeader}>
              <View>
                <Text style={styles.MovementTitle}>Movimentações</Text>
                <Text style={styles.MovementTitle}>recentes</Text>
              </View>
              <View>
                <TouchableOpacity onPress={acessar}>
                  <Text style={styles.MovementSubTitle}>Ver</Text>
                  <Text style={styles.MovementSubTitle}>todas</Text>
                </TouchableOpacity>
              </View>
            </View>
            <MovementList />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.containerFooter}>
        <Footer 
        activeTab='bank'
        />
      </View>
    </>
  )
}
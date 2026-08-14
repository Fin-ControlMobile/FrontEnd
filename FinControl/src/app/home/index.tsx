import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles/home.styles'
import Footer from '../../components/footer/footer'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MovementList from '../../components/movementList/movementList';
import Header from '../../components/header/header';


export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.containerMain}>
          <View style={styles.containerBalance}>
            <View>
              <Text style={styles.title}>Saldo disponível</Text>
              <View style={styles.containerMoney}>
                <Text style={styles.money}>R$ 5.240,80</Text>
                <Ionicons name="eye-outline" size={24} color="white" />
              </View>
            </View>
            <View></View>
            <View>
              <View>
                <View>
                  <FontAwesome6 name="arrow-up" size={24} color="white" />
                </View>
                <View>
                  <Text>Entradas</Text>
                  <Text>R$ 4.350,00</Text>
                </View>
              </View>
              <View></View>
              <View>
                <View>
                  <FontAwesome6 name="arrow-down" size={24} color="white" />
                </View>
                <View>
                  <Text>Saídas</Text>
                  <Text>R$ 285,70</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text>Movimentações</Text>
              <Text>recentes</Text>
            </View>
            <View>
              <Text>Ver</Text>
              <Text>todas</Text>
            </View>
          </View>
          <MovementList />
        </View>
        <Footer />
      </View>
    </>
  )
}



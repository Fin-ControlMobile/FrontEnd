import { View, Text, } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { styles } from './header.styles';
import { useAuth } from '../../context/AuthContext';

export default function Header() {

     const {usuario} = useAuth();

    return (
        <View style={styles.container}>
            <FontAwesome5 name="user-circle" size={30} color="#A078FF" />
            <View>
                <Text style={styles.secondarySource}>Olá,</Text>
                <Text style={styles.featuredSource}>{usuario?.nome}</Text>
            </View>
        </View>
    )
}

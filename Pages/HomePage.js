import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ItemButtons } from '../Components/StartButtons';

export default function HomePage({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.ItemsBox}>
                <View style={styles.flexrow}>
                    <ItemButtons size={50}
                        text={'Alarm'}
                        navigaionLocation={'Alarm'}
                        type={'alarm-outline'}
                        navigateFunction={() => navigation.navigate('Alarm')}
                    />
                    <ItemButtons size={45} text={'Clock'} navigaionLocation={'Alarm'} type={'time-outline'} />
                </View>
                <View style={styles.flexrow}>
                    <ItemButtons size={50} text={'Stopwatch'} navigaionLocation={'Alarm'} type={'stopwatch-outline'} />
                    <ItemButtons size={50} text={'Timer'} navigaionLocation={'Alarm'} type={'ios-timer-outline'} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',

    },
    ItemsBox: {
        display: 'flex',
        gap: 20,
    },
    flexrow: {
        flexDirection: 'row',
        gap: 20,
    },
    item: {
        width: 100,
        height: 100,
        backgroundColor: '#202020',
        borderWidth: 2,
        borderRadius: 20,
        // shadowColor: "red",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 18,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: '#fff'
    }
}); 

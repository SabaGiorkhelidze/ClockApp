import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const ItemButtons = ({ navigateFunction, navigaionLocation, size, text, type, }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={navigateFunction}>
            <Ionicons name={type} size={size} color="white" />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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

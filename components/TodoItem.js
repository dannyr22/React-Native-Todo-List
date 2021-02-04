import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const TodoItem = ({ item, handleDelete}) => {
    console.log(item)
    return (
        <TouchableOpacity onPress={() => handleDelete(item.key)}>
        <View style={styles.item}>
            <MaterialIcons name='delete' size={18} color="#333"/>
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
          
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    },
    itemText: {
        marginLeft: 'auto',
    }
})
 
export default TodoItem

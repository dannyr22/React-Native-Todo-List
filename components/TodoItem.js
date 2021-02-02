import React from 'react';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';

const TodoItem = ({ item, handleDelete}) => {
    console.log(item)
    return (
        <TouchableOpacity onPress={() => handleDelete(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
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
    borderRadius: 10,
    color: 'green',
    textAlign: 'center',
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
    },
})
 
export default TodoItem

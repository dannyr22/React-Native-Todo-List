import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  const handleDelete = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key)
  })
  }
  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
Alert.alert('OOPS!', 'todos must be over three chars long', [
  {text: 'understood', onPress: () => console.log('alert closed')}
])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('keyboard dismissed')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem  item={item} handleDelete={handleDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

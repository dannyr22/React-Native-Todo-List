import React from 'react';
import { FlatList, StyleSheet, Text, View,} from 'react-native';


const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    // flex: 1,
    paddingTop: 40
    ,
    backgroundColor: '#aaa',
    flexDirection: 'row',
    // justifyContent: 'space-between'
},
boxOne: {
    backgroundColor: 'green',
    padding: 10
},
boxTwo: {
    backgroundColor: 'violet',
    padding: 10
},
boxThree: {
    backgroundColor: 'blue',
    padding: 10,
    marginLeft: 'auto'
},
boxFour: {
    backgroundColor: 'red',
    padding: 10,
    marginLeft: 'auto'
}
})
 
export default Sandbox
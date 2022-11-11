//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const TestScreen = () => {

    const [myNum,setNum]  = useState(10)
    console.log(myNum)

    const _hello = () => {
        alert("Hey")
    }

    return (
        <View style={styles.container}>
            <Text>Proud to be indian</Text>
            <Button
            title='click me'
            onPress={_hello}
            />
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default TestScreen;

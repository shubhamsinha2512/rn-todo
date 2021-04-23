import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


function Header() {
    
    const styles = StyleSheet.create({
        header:{
            height: 80,
            padding: 30,
            backgroundColor: 'coral'
        },
        title: {
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'
        }
    })

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

export default Header

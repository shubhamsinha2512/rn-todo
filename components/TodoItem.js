import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

function TodoItem({item, pressHandler}) {

    const styles=StyleSheet.create({
        item: {
            padding: 16,
            marginTop: 16,
            borderColor: '#bbb',
            borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius: 10
        }
    })

    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default TodoItem
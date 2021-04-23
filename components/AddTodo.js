import React, {useState} from 'react'
import {TextInput, Text, StyleSheet, View, Button} from 'react-native'

function AddTodo({addTodo}) {
    
    const [todo, setTodo] = useState('');

    const styles = StyleSheet.create({
        input: {
            marginBottom: 10,
            padding: 8,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderBottomColor: '#ddd'
        }
    })

    function onChangeTextHanlder(val){
        setTodo(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Add New Todo...'
                value={todo}
                onChangeText={onChangeTextHanlder}
            />
            <Button onPress={()=>{
                addTodo(todo);
                setTodo('');
                }
            } 
                title='Add Todo' color='coral' />
        </View>
    )
}

export default AddTodo
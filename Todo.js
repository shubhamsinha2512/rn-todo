import React, {useState} from 'react';
import {connect} from 'react-redux'
import store from './redux/store'

import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import HomeView from './components/HomeView'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

function Todo(props) {

//   const [todos, setTodos] = useState([
//     {text : 'Read React Native Doc', key:'1'},
//     {text : 'Read Component Api', key:'2'},
//     {text : 'Learn about android bridge', key:'3'},
//     {text : 'Read about new synchronous feature', key:'4'},
//   ])

//   function pressHandler(key) {
//     setTodos((prevTodos)=>{
//       return prevTodos.filter(todo => todo.key != key)
//     });
//   }

//   function submitHandler(newTodo) {
//     setTodos((prevTodos)=>{
//       return [
//         {text: newTodo, key: Math.random().toString()},
//         ...prevTodos
//       ]
//     })
//   }
console.log(props.addTodo);

  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <AddTodo addTodo={props.addTodo} />
            <FlatList 
              data={props.todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={props.delTodo} />
              )}
            />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#000',
    fontSize: '24'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo : (todoText) => dispatch({
      type: 'ADD_TODO',
      payload: todoText
      }),

    delTodo: (key) => dispatch({
        type: 'DEL_TODO',
        payload: key
    })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
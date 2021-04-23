import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import Todo from './Todo'
import store from './redux/store'

function App(){
  return (
    <Provider store={store}>
      <View>
        <Todo />
      </View>
    </Provider>
  )
}

export default App;
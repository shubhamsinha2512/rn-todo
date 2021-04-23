import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {Provider} from 'react-redux'
import Todo from './Todo'
import store from './redux/store'

function App(){
  return (
    <Provider store={store}>
      <div className='App'>
        <Todo />
      </div>
    </Provider>
  )
}

export default App;
import {createStore} from 'redux'
import todoReducder from './reducer'

const store = createStore(todoReducder);

export default store;
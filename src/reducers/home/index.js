import {combineReducers} from 'redux'

import home from './home'
import login from '../login'

// home 模块的reducer
const homeReducer = combineReducers({
    home,
    login
})

export default homeReducer

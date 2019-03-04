import { combineReducers } from 'redux'
import home from './home'
import common from './common'
import demo from './demo'

const rootReducer = combineReducers({
    home,
    common,
    demo
})

export default rootReducer
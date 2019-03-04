import {handleActions} from 'redux-actions'

const defaultState = {}
const handlers = {}

const reducer = handleActions(handlers, defaultState)

export default reducer
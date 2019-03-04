
import {createAction} from 'redux-actions'
import type from '../../constants/actionType'
import actions from '../../actionCreators/home'

const getLoginInfo = createAction(type.MAIN_LOGIN_INFO, actions.loginInfo)

const actionCreators = {
    getLoginInfo
}

export default {actionCreators}


import {getFetch, postFetch} from '../../utils/network/request/HttpExtension'
import {PATH} from '../../constants/urls'

const loginInfo = params => getFetch(PATH.LOGIN_INFO, params)

export default {
    loginInfo
}

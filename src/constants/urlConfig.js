/**
 * Created by guangqiang on 2017/8/30.
 */
const host = {
  dev: {
    API_URL: 'http://dev.market.xq.bzhudong.com/service/rest',
    VENILOG_URL: 'https://api.douban.com'
  },
  alpha: {
    API_URL: 'http://api.xxx.com',
    VENILOG_URL: 'http://venilog.xxx.com'
  },
  qa: {
    API_URL: 'http://api.xxx.com',
    VENILOG_URL: 'http://venilog.xxx.com'
  },
  pre: {
    API_URL: 'http://api.xxx.com',
    VENILOG_URL: 'http://venilog.xxx.com'
  },
  prd: {
    API_URL: 'http://market.xq.bzhudong.com/service/rest',
    VENILOG_URL: 'http://venilog.xxx.com'
  }
}

let ENV = 'prd'
let currentHost = host[ENV]

const setHost = (env = 'dev') => {
  ENV = env
  currentHost = host[ENV]
}

const API_URL = currentHost.API_URL

const VENILOG_URL = currentHost.VENILOG_URL

export {ENV, VENILOG_URL, API_URL, setHost}
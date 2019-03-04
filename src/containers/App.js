import React, {Component} from "react"
import store from '../store'
import {Provider, connect} from 'react-redux'
import {Scene, Router, Actions, Reducer, ActionConst, Modal, Stack, Lightbox} from "react-native-router-flux"
import {View} from "react-native"
import Action from '../actions'
import {dispatch} from '../utils/venilog/dispatchLog'
import type from '../constants/actionType'

import MessageBar from "../utils/messageBar/MessageBar"
import Loading from '../utils/progressHUD/progressHUD'
import TabBar from './TabBarContainer'
import WebView from '../components/page/webview'
import CustomMap from '../components/page/Map'

import CodePush from 'react-native-code-push';
import { Initializer } from "react-native-baidumap-sdk";

Initializer.init("jIBwYpPowb2yEcUtZL2mgwU0IPopO2X3")

let codePushOptions = {
  //设置检查更新的频率
  //ON_APP_RESUME APP恢复到前台的时候
  //ON_APP_START APP开启的时候
  //MANUAL 手动检查
  checkFrequency : CodePush.CheckFrequency.ON_APP_START
};
const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    action.type !== type.REACT_NATIVE_ROUTER_FLUX_SET_PARAMS ? dispatch(state)(action) : null
    return defaultReducer(state, action)
  }
}

const getSceneStyle = () => ({
  backgroundColor: "white",
  shadowOpacity: 1,
  shadowRadius: 3,
})

const scenes = Actions.create(
  <Scene key="root">
    <Modal key="modal" hideNavBar>
      <Lightbox key="lightbox" hideNavBar={true}>

        <Stack key="init" back>
          <Scene key="main" initial back={false} hideNavBar component={TabBar}/>
          <Scene key='loading' component={connect(
              (state) => state.common.loading
            )(Loading)}/>
          <Scene key="webView" hideNavBar component={WebView}/>
          <Scene key="mapView" hideNavBar component={CustomMap}/>
        </Stack>
      </Lightbox>
    </Modal>
    
  </Scene>
)

class App extends Component {

  //如果有更新的提示
  syncImmediate() {
    CodePush.sync( {
      //安装模式
      //ON_NEXT_RESUME 下次恢复到前台时
      //ON_NEXT_RESTART 下一次重启时
      //IMMEDIATE 马上更新
      mandatoryInstallMode : CodePush.InstallMode.IMMEDIATE ,
      //对话框
      updateDialog : {
        //是否显示更新描述
        appendReleaseDescription : true ,
        //更新描述的前缀。 默认为"Description"
        descriptionPrefix : "更新内容：" ,
        //强制更新按钮文字，默认为continue
        mandatoryContinueButtonLabel : "立即更新" ,
        //强制更新时的信息. 默认为"An update is available that must be installed."
        mandatoryUpdateMessage : "必须更新后才能使用" ,
        //非强制更新时，按钮文字,默认为"ignore"
        optionalIgnoreButtonLabel : '稍后' ,
        //非强制更新时，确认按钮文字. 默认为"Install"
        optionalInstallButtonLabel : '后台更新' ,
        //非强制更新时，检查到更新的消息文本
        optionalUpdateMessage : '有新版本了，是否更新？' ,
        //Alert窗口的标题
        title : '更新提示'
      }
    });
  }

  componentWillMount(){
    CodePush.disallowRestart();
    this.syncImmediate();
  }

  componentDidMount(){
    CodePush.allowRestart();
    
  }

  codePushDownloadDidProgress(progress){
    console.warn(progress);
    // this.progressProp = progress;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Router
          scenes={scenes}
          createReducer={reducerCreate}
          tintColor='white'
          getSceneStyle={getSceneStyle}
        />
        <MessageBar />
      </View>
    )
  }
}
const NApp = CodePush(codePushOptions)(App);
const initApp = () => {
  
  return (
    <Provider store={store}>
      <NApp/>
    </Provider>
  )
}

export default initApp
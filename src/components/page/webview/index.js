/**
 * Created by guangqiang on 2017/9/6.
 */
import React, {Component} from 'react'
import {StyleSheet, View, WebView, Platform} from 'react-native'
import {commonStyle} from '../../../utils/commonStyle'
import {BaseComponent} from '../../base/baseComponent'
import { deviceInfo } from '../../../utils'
export default class CustomWebView extends BaseComponent {
  
  navigationBarProps() {
    return {
      title: this.props.title,
      subTitleStyle: {
        color: commonStyle.white
      },
      titleStyle: {
        color: commonStyle.white
      },
      leftIcon: {
        name: 'nav_back_o',
        size: 20,
        color: commonStyle.white
      },
      navBarStyle: {
        backgroundColor: '#151C28',
      }
    }
  }

  _render() {
    const {url} = this.props
    return (
      <View style={styles.container}>
        <WebView
          ref={'webview'}
          style={{
            width: deviceInfo.deviceWidth,
          }}
          allowsInlineMediaPlayback={true}
          automaticallyAdjustContentInsets={true}
          javaScriptEnabled={true}
          saveFormDataDisabled={true}
          scalesPageToFit={true}
          contentInset={{top:0,left:0,right:0,bottom:0}}
          startInLoadingState={true}
          source={{ uri: 'http://www.baidu.com'}}
          scalesPageToFit={Platform.OS === 'ios'? true : false}
          onError={event=>{
            console.warn(event)
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.white
  }
})
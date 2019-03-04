import React, {Component} from 'react'
import {View, StyleSheet, Text, Image, TextInput, ScrollView,ActivityIndicator} from 'react-native'
import Action from '../../../actions'
import {Actions} from 'react-native-router-flux'
import { commonStyle, deviceInfo } from '../../../utils'
import {connect} from 'react-redux'
import FastImage from 'react-native-fast-image'
import Swiper from 'react-native-swiper'
import {ScrollableTabView, DefaultTabBar, ScrollableTabBar}  from '@valdio/react-native-scrollable-tabview'
import {BaseComponent} from '../../base/baseComponent'
const FirstRoute = () => <View style={[styles.container, {}]}>
  <Text>shkfeAAAAAAAAAAAAAAAAAAAAAAAAgffsd</Text>
  <Text>shkfeAAAAAAAAAAAAAAAAAAAAAAAAgffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>shkfegffsd</Text>
  <Text>ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</Text>
</View>

class Demo extends BaseComponent{
    _timer = -1
    constructor(props){
        super(props)
        this.state = {
            canscroll:true
        }
    }

    navigationBarProps() {
        return {
          title: '测试',
          rightTitle: '网页'
        }
    }

    onRightPress() {
        Actions.webView({uri: 'http://www.baidu.com', title: '简书'})
    }

    componentDidMount(){
    }

    renderBar(){
        return (
            <View style={styles.swiperStyle}>
            <Swiper
                height={200}
                loop={true}
                autoplay={true}
                autoplayTimeout={5}
                horizontal={true}
                paginationStyle={styles.paginationStyle}
                showsButtons={false}
                showsPagination={true}
                dotStyle={styles.dot}
                activeDotStyle={styles.dotactive}>
                <FastImage
                    style={styles.imgstyle}
                    source={{
                        uri:'http://09.imgmini.eastday.com/mobile/20180430/238c5a740cbdab458f849773bad567b3_wmk.jpeg',
                        priority:FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                    >
                </FastImage>
                <FastImage
                    style={styles.imgstyle}
                    source={{
                        uri:'http://p19.qhimg.com/bdr/__/d/_open360/sport0515/19.jpg',
                        priority:FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                    >
                </FastImage>
                <FastImage
                    style={styles.imgstyle}
                    source={{
                        uri:'http://img5.imgtn.bdimg.com/it/u=581639084,3113052759&fm=200&gp=0.jpg',
                        priority:FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                    >
                </FastImage>
                <FastImage
                    style={styles.imgstyle}
                    source={{
                        uri:'http://sports.people.com.cn/NMediaFile/2016/0603/MAIN201606031151584982866214465.jpg',
                        priority:FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                    >
                </FastImage>
                <FastImage
                    style={styles.imgstyle}
                    source={{
                        uri:'http://wx2.sinaimg.cn/crop.0.4.1280.711/005W0FI4gy1fsqsyu2fldj30zk0k0tcg.jpg',
                        priority:FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                    >
                </FastImage>
            </Swiper>
        </View>
        )
    }


    _onRefresh = (callback) => {
        callback({test:23})
      }

      _onEndRefresh = (callback)=>{
        setTimeout(() => {
            callback(false, false)
        }, 1000);
      }
    
      _render() {
        return (

            <ScrollableTabView
                enableFooterInifinite={true}
                endRefresh={this._onEndRefresh}
                pullToRefresh={this._onRefresh}
                collapsableBar={this.renderBar()}
                tabBarBackgroundColor="white"
                renderTabBar={() => <ScrollableTabBar/>}
            >
            <View tabLabel='iOS' style={{backgroundColor: 'blue'}}>
                <FirstRoute/>
            </View>
            <View tabLabel='Android' style={{backgroundColor: 'blue'}}>
                <FirstRoute/>
            </View>
            </ScrollableTabView>
        )
      }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
      },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    containerStyle: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        display:'flex',
        
        flexDirection:commonStyle.column,
    },
    dot:{
        backgroundColor:'#0000001F',
        width:10,
        height:5,
        borderRadius:2,
    },
    dotactive:{
        backgroundColor:'#007aff',
        width:10,
        height:5,
        borderRadius:2,
    },
    swiperStyle:{
        width:deviceInfo.deviceWidth,
        height:200,
    },
    imgstyle:{
        width:deviceInfo.deviceWidth,
        height:200,
        padding:0,
        margin:0
    },
    scrollViewStyle:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'flex-start',
    },
    paginationStyle:{
        position:'absolute',
        bottom:10,
    },
    scrollableStyle:{
        marginTop:10
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    tabText: {
        fontSize: 13,
        lineHeight: 17,
        textAlign: 'left',
        fontStyle: 'normal',
        color: 'red'
      },
      collapsibleTabBar: {
        backgroundColor: 'blue',
        paddingVertical: 20,
        minHeight: 80
      },
      headerRefresh: {
        width: deviceInfo.deviceWidth,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerInfinite: {
        width:deviceInfo.deviceWidth,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      refreshFont: {
        fontSize: 16,
        color: '#b84f35'
      },
});

const _demo = connect(
    (state) => state.demo,
    Action.dispatch('demo')
  )(Demo)
  
export default _demo

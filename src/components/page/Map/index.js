import React, {Component} from 'react'
import {StyleSheet, View, Image, Text, Button, TouchableOpacity, Animated, Easing} from 'react-native'
import {commonStyle} from '../../../utils/commonStyle'
import {BaseComponent} from '../../base/baseComponent'
import { deviceInfo } from '../../../utils'
import {MapView, Location} from 'react-native-baidumap-sdk'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux';
// my-location chevron-left
export default class CustomMapView extends Component {
  // navigationBarProps() {
  //     return {
  //       title: "地图",
  //       subTitleStyle: {
  //         color: commonStyle.white
  //       },
  //       titleStyle: {
  //         color: commonStyle.white
  //       },
  //       leftIcon: {
  //         name: 'nav_back_o',
  //         size: 20,
  //         color: commonStyle.white
  //       },
  //       navBarStyle: {
  //         backgroundColor: '#151C28',
  //       }
  //     }
  // }

  constructor(props){
    super(props)
    this.state= {
      animating:false,
      address:{ longitude: 113.960453, latitude: 22.546045 },
      markers: [],
      locationBottom: new Animated.Value(20),
      infoBottom: new Animated.Value(-180),
      icons:[{
        icon:require('../../../assets/img/icon_1.png'),
        title:'塑料瓶',
        price:'0.01元/个',
        key: Math.random()
      },{
        icon:require('../../../assets/img/icon_2.png'),
        title:'塑料瓶',
        price:'0.03元/个',
        key: Math.random()
      },
      {
        icon:require('../../../assets/img/icon_3.png'),
        title:'塑料瓶',
        price:'0.03元/个',
        key: Math.random()
      },
      {
        icon:require('../../../assets/img/icon_4.png'),
        title:'塑料瓶',
        price:'0.03元/个',
        key: Math.random()
      },
      {
        icon:require('../../../assets/img/icon_5.png'),
        title:'塑料瓶',
        price:'0.03元/个',
        key: Math.random()
      },
      {
        icon:require('../../../assets/img/icon_6.png'),
        title:'塑料瓶',
        price:'0.03元/个',
        key: Math.random()
      }
      ]
    }
  }

  async componentWillMount(){
    await Location.init()
    Location.addLocationListener(location => {
      this.setState({
        address:{longitude:location.longitude, latitude:location.latitude}
      })
      Location.stop()
    })
    Location.start()
  }

  componentDidMount(){
    this._moveUp()
  }

  _getLocation(){
    Location.start()
    if (this.state.animating == false){
      this._moveUp()
    }
  }

  _moveUp(){
    this.setState({
      animating:true
    })
    Animated.timing(this.state.infoBottom, {
      toValue: 0, // 目标值
      duration: 500, // 动画时间
      easing: Easing.linear // 缓动函数
    }).start(()=>this.setState({
      animating:false
    }))

    Animated.timing(this.state.locationBottom, {
      toValue: 200, // 目标值
      duration: 500, // 动画时间
      easing: Easing.linear // 缓动函数
    }).start()
  }

  _moveDown(){
    this.setState({
      animating:true
    })
    Animated.timing(this.state.infoBottom, {
      toValue: -180, // 目标值
      duration: 400, // 动画时间
      easing: Easing.linear // 缓动函数
    }).start(()=>this.setState({
      animating:false
    }))

    Animated.timing(this.state.locationBottom, {
      toValue: 20, // 目标值
      duration: 400, // 动画时间
      easing: Easing.linear // 缓动函数
    }).start()
  }

  addMarker = coordinate =>
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate,
          key: Math.random()
        }
      ]
    });

  clickMaker(item){
    if (this.state.animating == false){
      this._moveUp()
    }
  }

  onStatusChange = status => {
    // console.warn("---------------status------------", status)
    if (this.state.animating == false){
      this._moveDown()
    }
  };
  
  renderMarker = () => (
      <View style={styles.marker}>
        <Image
          style={styles.image}
          source={require('../../../assets/img/loading_error_image.png')}
        />
      </View>
    )
      
    render(){
        return (
            <View style={styles.container}>
                <MapView
                    ref= 'mapView'
                    width={deviceInfo.deviceWidth} 
                    height={deviceInfo.deviceHeight} 
                    zoomControlsDisabled={false}
                    zoomDisalbed={false}
                    center={this.state.address}
                    zoomLevel={18}
                    onClick={this.addMarker}
                    onStatusChange={this.onStatusChange}
                    >
                    {this.state.markers.map(item => (
                      <MapView.Marker {...item} view={this.renderMarker} onPress={() => this.clickMaker(item)}/>
                    ))}
                </MapView>
                <View style={styles.backbtn}>
                  <TouchableOpacity  onPress={()=>{Actions.pop()}}>
                    <Icon name={'chevron-left'} size={30} color={commonStyle.textBlockColor}/>
                  </TouchableOpacity>
                </View>
                <Animated.View
                  style={[styles.locationbtn, {bottom:this.state.locationBottom}]}>
                    <TouchableOpacity onPress={()=>this._getLocation()}>
                      <Icon name={'my-location'} size={20} color={commonStyle.textBlockColor}/>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.locationinfo, {bottom:this.state.infoBottom}]}>
                    <View style={styles.titleinfo}>
                      <Text style={styles.titletext}>天鹅湖花园</Text>
                      <Text style={styles.infotext}>
                        <Icon name={'location-on'} size={12} color={commonStyle.textGrayColor}/>
                        1527米 | 贵溪街道天府大道中段177号
                      </Text>
                      <Text style={styles.infotext}>
                        <Icon name={'access-time'} size={12} color={commonStyle.textGrayColor}/>
                        周一至周日 08:30-21:30 | 编号：002800218
                      </Text>
                    </View>
                    <View style={styles.spaceline}></View>
                    <View style={styles.contentcontainer}>
                      {this.state.icons.map(item=>(
                        <View key={item.key} style={styles.containerItem}>
                          <Image style={styles.imagestyle} source={item.icon}/>
                          <View style={styles.containerText}>
                            <Text style={styles.textstyle}>{item.title}</Text>
                            <Text style={styles.textstyle}>{item.price}</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                </Animated.View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    marker: {
        flexDirection: "row",
        backgroundColor: "transparent"
    },
    image: {
        width: 24,
        height: 24,
    },
    backbtn:{
      position:'absolute',
      top:15,
      left:15,
      width:30,
      height:30,
      backgroundColor:'white',
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center'
    },

    locationbtn:{
      position:'absolute',
      left:15,
      width:30,
      height:30,
      backgroundColor:'white',
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center'
    },

    locationinfo:{
      width:deviceInfo.deviceWidth,
      height:180,
      backgroundColor:'white',
      display:'flex',
      flexDirection:commonStyle.column,
      paddingLeft:18,
      paddingRight:18,
      position:'absolute',
      left:0
    },

    titleinfo:{
      width:'100%',
      height:80,
      display:'flex',
      flexDirection:commonStyle.column,
      justifyContent:'space-around',
      paddingBottom:10
    },

    titletext:{
      color:commonStyle.black,
      fontSize:24,
      height:30
    },

    infotext:{
      color:commonStyle.textGrayColor,
      fontSize:12,
      height:14,
      justifyContent:'center',
      alignItems:'center'
    },

    spaceline:{
      height:1,
      backgroundColor:'#cfcfcf'
    },

    contentcontainer:{
      paddingTop:4,
      flex:1,
      justifyContent:'space-around',
      alignContent:'space-around',
      flexDirection:commonStyle.row,
      flexWrap:'wrap'
    },

    containerItem:{
      width:100,
      height:25,
      justifyContent:'space-around',
      alignContent:'space-around',
      display:'flex',
      flexDirection:commonStyle.row
    },
    containerText:{
      paddingLeft:4,
      flex:1,
      display:'flex',
      flexDirection:commonStyle.column,
      justifyContent:'space-around'
    },
    imagestyle:{
      width:25, 
      height:25
    },
    textstyle:{
      fontSize:10,
      color:commonStyle.black
    }
})
import React, {Component} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import {commonStyle} from '../../../utils/commonStyle'
import {BaseComponent} from '../../base/baseComponent'
import { deviceInfo, Icon } from '../../../utils'
import {MapView, Location} from 'react-native-baidumap-sdk'

export default class CustomMapView extends BaseComponent {
  navigationBarProps() {
      return {
        title: "地图",
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

  async componentWillMount(){
    this.setState({
        address:{ longitude: 113.960453, latitude: 22.546045 },
        markers: [] 
    })
    await Location.init()
    Location.addLocationListener(location => {
      this.setState({
        address:{longitude:location.longitude, latitude:location.latitude}
      })
    })
    Location.start()
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

  renderMarker = () => (
      <View style={styles.marker}>
        <Image
          style={styles.image}
          source={require('../../../assets/img/loading_error_image.png')}
        />
      </View>
    )
      
    _render(){
        return (
            <View style={styles.container}>
                <MapView 
                    width={deviceInfo.deviceWidth} 
                    height={deviceInfo.deviceHeight-commonStyle.navContentHeight} 
                    zoomControlsDisabled={false}
                    zoomDisalbed={false}
                    center={this.state.address}
                    zoomLevel={18}
                    onClick={this.addMarker}
                    >
                    {this.state.markers.map(item => (
                      <MapView.Marker {...item} view={this.renderMarker}/>
                    ))}
                </MapView>
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
})
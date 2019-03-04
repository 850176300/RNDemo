import React, {Component} from 'react'
import {View, StyleSheet, Text, Image, TextInput,TouchableOpacity} from 'react-native'
import Action from '../../../actions'
import { commonStyle, deviceInfo } from '../../../utils'
import {connect} from 'react-redux'
import {SegmentedControl, InputItem} from '@ant-design/react-native'
import {Button} from '../../common/button/enhancedBtn'

class Home extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            selectedTab:'售卖',
            sellCnt:200,
            selledCnt:0,
            leastPrice:0.51,

            cancellNum:0,
            leftshell:200,

            input1:'',
        }
    }

    componentDidMount(){
        // this.props.getLoginInfo().then()
    }

    _onTabChanged(event){
        console.log(event)
        this.setState({selectedTab:event})
    }

    render(){
        return (
            <View style={styles.containerStyle}>
               <Image resizeMode='contain' style={styles.image} source={require('../../../assets/img/index.jpg')} />
               <View style={styles.cardview}>
                    <SegmentedControl
                        style={styles.tabStyle}
                        values={['售卖', '挂单']}
                        selectedIndex={0}
                        onValueChange={(event)=>this._onTabChanged(event)}
                        tintColor={'#e65544'}
                    />
                {
                   this.state.selectedTab === '挂单' ?
                   <View style={styles.orderstyle}>
                        <View style={styles.itemstyle1}>
                            <Text style={styles.tiptext}>温馨提示：每日可挂单次数为100次</Text>
                        </View>
                        <View style={styles.itemstyle2}>
                            <Text style={{color:'#465646', fontSize:10, flex:1}}>今日可挂单：{this.state.sellCnt}个 </Text>
                            <Text style={{color:'#465646', fontSize:10, flex:1}}>今日已挂单：{this.state.selledCnt}个 </Text>
                        </View>
                        <View style={styles.itemstyle3}>
                            <Text style={{color:'#666666', fontSize:10, paddingTop:9}}>出售数量：</Text>
       
                            <TextInput 
                                style={{color:'#333333',fontSize:10, paddingLeft:20, flex:1, height:30, paddingBottom:0,paddingTop:0}} 
                                autoCapitalize={'none'}
                                keyboardType={'phone-pad'}
                                placeholder={'输入出售数量'}
                                placeholderTextColor={'#bbbbbb'}
                                autoCorrect={false}
                                underlineColorAndroid={'transparent'}
                            ></TextInput>
                        </View>
                        <View style={styles.itemstyle4}>
                            <Text style={{color:'#465646', fontSize:10, flex:1}}>最低售价：{this.state.leastPrice}元/个 </Text>
                            <Text style={{color:'#465646', fontSize:10, flex:1}}>保留最低两位小数 </Text>
                        </View>
                        <View style={styles.itemstyle5}>
                            <Text style={{color:'#666666', fontSize:10, paddingTop:9}}>出售单价：</Text>
       
                            <TextInput 
                                style={{color:'#333333',fontSize:10, paddingLeft:20, flex:1, height:30, paddingBottom:0,paddingTop:0}} 
                                autoCapitalize={'none'}
                                keyboardType={'phone-pad'}
                                placeholder={'输入出售单价'}
                                placeholderTextColor={'#bbbbbb'}
                                autoCorrect={false}
                                underlineColorAndroid={'transparent'}
                            ></TextInput>
                             <Text style={{color:'#666666', fontSize:10, paddingTop:9, flex:1}}>元/个</Text>
                        </View>
                        <View style={styles.btnview}>
                            <Button 
                                style={{borderRadius:30, width:80,height:25, borderColor:'#e65544' }}>
                                <Text style={{color:'#e65544', fontSize:10}}>取消</Text>
                            </Button>
                            <TouchableOpacity 
                                style={{ width:80,height:25,overflow: 'hidden',borderRadius:30}}>
                                <Image resizeMode='stretch' style={{ width:80, height:25}} source={require('../../../assets/img/bg_line.png')} >
                                </Image>
                                <Text style={{color:'white', fontSize:10, position:"absolute",top:5, left:30}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                   </View>:
                   <View style={styles.sellstyle}>
                        <View style={[styles.itemstyle1,{height:30, paddingTop:7}]}>
                            <Text style={styles.tiptext}>可售贝壳数量：{this.state.cancellNum}个</Text>
                        </View>
                        <View style={[styles.itemstyle5, {height:36,paddingTop:4}]}>
                            <Text style={{color:'#666666', fontSize:10, paddingTop:9, width:70}}>玩家游戏ID：</Text>
                    
                            <TextInput 
                                style={{color:'#333333',fontSize:10, flex:1, height:30, paddingBottom:0,paddingTop:0}} 
                                autoCapitalize={'none'}

                                placeholder={'输入玩家ID'}
                                placeholderTextColor={'#bbbbbb'}
                                autoCorrect={false}
                                underlineColorAndroid={'transparent'}
                            ></TextInput>
                        </View>

                        <View style={[styles.itemstyle5, {height:36,paddingTop:4}]}>
                            <Text style={{color:'#666666', fontSize:10, paddingTop:9, width:70}}>转账数量：</Text>
                    
                            <TextInput 
                                style={{color:'#333333',fontSize:10, flex:1, height:30, paddingBottom:0,paddingTop:0}} 
                                autoCapitalize={'none'}

                                placeholder={'输入转账数量'}
                                placeholderTextColor={'#bbbbbb'}
                                autoCorrect={false}
                                underlineColorAndroid={'transparent'}
                            ></TextInput>
                        </View>

                        <View style={[styles.btnview, {paddingTop:15}]}>
                            <Button 
                                style={{borderRadius:30, width:80,height:25, borderColor:'#e65544' }}>
                                <Text style={{color:'#e65544', fontSize:10}}>取消</Text>
                            </Button>
                            <TouchableOpacity 
                                style={{ width:80,height:25,overflow: 'hidden',borderRadius:30}}>
                                <Image resizeMode='stretch' style={{ width:80, height:25}} source={require('../../../assets/img/bg_line.png')} >
                                </Image>
                                <Text style={{color:'white', fontSize:10, position:"absolute",top:5, left:30}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                   </View>
               }
               </View>
               <Text style={{color:'#cccccc', fontSize:10, position:'absolute', bottom:20}}>当前贝壳余额：{this.state.leftshell}个</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        flexDirection:commonStyle.column,
        justifyContent:'flex-start',
        alignItems:'center',
    },

    image: {
        width:deviceInfo.deviceWidth,
        height:deviceInfo.deviceWidth*0.4,
    },

    cardview:{
        position:"absolute",
        top:120,
        backgroundColor:commonStyle.white,
        borderRadius:6,
        width:deviceInfo.deviceWidth-100,
        paddingBottom:10,
        // alignItems:'center',
        flexDirection:commonStyle.column,
        justifyContent:"center"
    },
    tabStyle: {
        width: deviceInfo.deviceWidth-100,
        marginBottom:2,
    },
    
    sellstyle:{
        borderTopWidth: 1, 
        borderTopColor: commonStyle.lineColor,
        height:150
    },

    orderstyle:{
        borderTopWidth: 1, 
        borderTopColor: commonStyle.lineColor,
        height:180,
        display:'flex',
        flexDirection:commonStyle.column,
        justifyContent:'flex-start',
    },

    itemstyle1:{
        backgroundColor:'#fcf9fc',
        height:22,
        paddingLeft:8,
        paddingTop:4
    },

    itemstyle2:{
        backgroundColor:'#fcf9fc',
        height:22,
        paddingLeft:8,
        paddingTop:2,
        flexDirection:'row',
        justifyContent:'space-around'
    },

    itemstyle3:{
        height:30,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:8,
    },

    itemstyle4:{
        backgroundColor:'#fcf9fc',
        height:22,
        paddingLeft:8,
        
        paddingTop:4,
        flexDirection:'row',
        justifyContent:'space-around',
        
    },

    itemstyle5:{
        height:30,
        flexDirection:'row',
        justifyContent:'space-around',
        marginLeft:8,
        marginRight:8,
        borderBottomColor:'#e3e3e3',
        borderBottomWidth:1
    },

    btnview:{
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:25
    },  

    tiptext:{
        fontSize:10,
        color:'#e65544',
        flex:1
    },

    // inputstyle:{
    //     multiline:false,
    // }


})


const _home = connect(
    (state) => state.home.home,
    Action.dispatch('home')
  )(Home)
  
export default _home
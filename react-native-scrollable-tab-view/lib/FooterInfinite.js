import React,{Component}from 'react'
import PropTypes from 'prop-types'
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native'


export default class FooterInifinite extends Component{
    static propTypes = {
        isLoading: PropTypes.bool,
        hasMore: PropTypes.bool
    }
    static defaultProps = {
        isLoading: false,
        hasMore:true
    }

    constructor(props){
        super(props)
        this.state={
            isLoading:props.isLoading,
            hasMore:props.hasMore
        }
    }

    render(){
        if (this.state.isLoading){
            return(
                <View style={styles.viewstyle}>
                    <ActivityIndicator style={styles.indicatorstyle} />
                    <Text style={styles.textstyle}>
                        加载数据中...
                    </Text>
                </View>
            )
        }else {
            if (this.state.hasMore == false){
                return (
                    <View style={styles.viewstyle}>
                        <Text style={[styles.textstyle, {marginLeft:0}]}>
                            数据都加载完，没有多余的数据~~
                        </Text>
                    </View>
                )
            }
        }
        return null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: nextProps.isLoading,
            hasMore:nextProps.hasMore
        });
    }
}

const styles = StyleSheet.create({
    viewstyle:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: 'center',
        padding:4,
        height:50,
        width:'100%'
    },
    indicatorstyle:{
        width:20,
        height:20
    },
    textstyle:{
        color:'black',
        fontSize:14,
        marginLeft:10
    }
})
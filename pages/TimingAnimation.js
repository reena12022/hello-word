import React, { useEffect } from 'react'
import {View,Text,Image,Animated,Easing,StyleSheet} from 'react-native'

const TimingAnimation=()=>{
    const spinValue=new Animated.Value(0)
    console.log("spinValue>>",spinValue)
    useEffect(()=>{
        spin()
    },[])
    const spin=()=>{
        spinValue.setValue(0)
        Animated.timing(spinValue,{
            toValue:1,
            duration:4000,
            easing:Easing.linear,
            useNativeDriver:false
        }).start(()=>spin())
    }
    const spin1=spinValue.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg']
    })
    console.log("spin1>>",spin1)
return(
    <View style={styles.container}>
    <Animated.Image
      style={{
        width: 227,
        height: 200,
        transform: [{rotate: spin1}] }}
        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
    />
  
  </View>
)
}
export default TimingAnimation
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
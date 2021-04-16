import React, { useState } from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Animated,Easing} from 'react-native'

const ButtonMain=()=>{
    const loginButtonAnimationVariable = React.useRef(new Animated.Value(0)).current;
    const [doAnimation,setdoAnimation]=useState(false)
    const runLoginButtonAnimation = (toVal) => {
        Animated.timing(loginButtonAnimationVariable, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.bounce,
        }).start(() => {
        //   runAnimation(0);
          loginButtonAnimationVariable.setValue(0);
        });
      }
return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     
        <TouchableOpacity
        style={{margin:20,padding:10}}
        onPress={()=>runLoginButtonAnimation(1)}
        > 
           <Animated.View style={{
            width: loginButtonAnimationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [120, 60],
                            extrapolate: 'clamp',
                          }),
            height: loginButtonAnimationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [40, 60],
                            extrapolate: 'clamp',
                          }),
            borderRadius: loginButtonAnimationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [8, 60],
                            extrapolate: 'clamp',
                          }),
            elevation: 8,
            shadowColor: '#0047BB',
            shadowRadius: 8,
            backgroundColor: loginButtonAnimationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['#0D2534', '#652EC7'],
                            extrapolate: 'clamp',
                          }),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Animated.Text style={{
              color: '#9BE6DE',
              position: 'absolute',
              opacity: loginButtonAnimationVariable.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0],
                            extrapolate: 'clamp',
                        }),
            }}>Login</Animated.Text>
            <Animated.View style={{
                  position: 'absolute',
                  width: 60,
                  height: 60,
                  backgroundColor: '#0D2534',
                  borderRadius: 60,
                  opacity: loginButtonAnimationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1],
                                extrapolate: 'clamp',
                            }),
                  transform: [{
                    scale: loginButtonAnimationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.3, 1],
                                extrapolate: 'clamp',
                            }),
                  }],
                }} />
            <Animated.View style={{
                  position: 'absolute',
                  opacity: loginButtonAnimationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1],
                                extrapolate: 'clamp',
                            }),
                }}>
              {/* <Icon name="lock" size={30} color={'#9BE6DE'} /> */}
            </Animated.View>
            
          </Animated.View>
            
            </TouchableOpacity>
    </View>
)
}
export default ButtonMain
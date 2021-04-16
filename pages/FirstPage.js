import React, { useEffect,useState,useRef } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView, FlatList ,Animated} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AnimatedHeader from './Header'
import { getPageList } from '../redux/action/pageList'
import {  UserSignup} from '../redux/action/signup'
// import { SafeAreaProvider } from 'react-native-safe-area-context'

const FirstPage = () => {

    const listData = useSelector(state => state.pageList)
    const offset=useRef(new Animated.Value(0)).current;
   
    const dispatch = useDispatch();
    const onButtonPress = () => {
       
        dispatch(getPageList())
    }

    const renderItem = ({ item, index }) => {
       
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }
   const renderEmpty=()=>{
        return(
            <Text>No Data</Text>
        )
    }
  return (
    //   <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <AnimatedHeader animatedValue={offset}/>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => onButtonPress()}>
                <Text style={{ color: '#fff' }}>Get Data </Text>
            </TouchableOpacity>
       
               <FlatList
              
               data={listData.pageList}
               onScroll={
                   Animated.event(
                       [{nativeEvent:{contentOffset:{y:offset}}}],
                       {useNativeDriver:false}
                   )
               }
               renderItem={renderItem}
               ListEmptyComponent={renderEmpty}
               scrollEventThrottle={16}
               contentContainerStyle={{
                alignItems: 'center',
                paddingTop:150,
                // paddingHorizontal: 20
              }}
           />
          
        </SafeAreaView>
        // </SafeAreaProvider>
    )
}
export default FirstPage

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'green',
        padding: 5
    }
})
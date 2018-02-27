import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,StatusBar,Image,TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class  Login  extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width:40,height:70}} source={require('./images/logo.png')} />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"/>
                {/* <StatusBar backgroundColor="#005662" barStyle="light-content" />
                <Text style={{color:'#ffffff',fontSize:10}}>Hi There this himanshu</Text> */}
            </View>   
        )
    }
}

const styles = StyleSheet.create ({
    container: {
       backgroundColor: '#546e7a',
       flex:1,
       alignItems: 'top',
       justifyContent:'center'
    },
    text: {
       color: '#4f603c'
    },
    inputBox:{
      width:300,
      backgroundColor: '#8d8d8d',

    }
 })


 

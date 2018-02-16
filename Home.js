import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';

class Home extends Component {
    constructor(){
        super()
        this.updateState = this.updateState.bind(this)
     }
   state = {
      myState: 'Hi this is himanshu.I am Building Native App Through React Native App dfsdf.'
   }

    updateState(){
        this.setState({ myState: 'The state is updated' })
    } 

    render() {
        return (
            <View>
                <Text onPress = {this.updateState} style = {styles.myState}>
                {this.state.myState}
                </Text>
            </View>
        );
    }

}
export default Home


const styles = StyleSheet.create ({
    myState: {
       marginTop: 20,
       textAlign: 'center',
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 20
    }
 })
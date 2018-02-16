import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
   const goToHome = () => {
      Actions.List()
   } 
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
         <Text>This is Detail</Text>
      </TouchableOpacity>
   )
}
export default Detail
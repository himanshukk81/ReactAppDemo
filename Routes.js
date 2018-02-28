import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import List from './List.js'
import Detail from './Detail.js'
import Login from './login.js'

const Routes = () => (
    <Router>
       <Scene key = "root" hideNavBar={true} >
          <Scene key = "Login" component = {Login} title = "Login" initial = {true} />    
          <Scene key = "Users" component = {List} title = "Users" />
          <Scene key = "Detail" component = {Detail} title = "Detail" />
       </Scene>
    </Router>
 )
export default Routes
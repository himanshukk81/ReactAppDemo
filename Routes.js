import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import List from './List.js'
import Detail from './Detail.js'

const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene key = "Users" component = {List} title = "Users" initial = {true} />
          <Scene key = "Detail" component = {Detail} title = "Detail" />
       </Scene>
    </Router>
 )
export default Routes
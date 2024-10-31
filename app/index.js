import { View, Text } from 'react-native'
import React from 'react'
import Custompropex from '../components/custompropex'
import Multipleprops from '../components/multipleprops'
import Arraycustomprops from '../components/arraycustomprops'
import Customstate from '../components/customstate'
import App from '../components/App'

const Index = () => {
  return (
    <View style={{flex:1, padding: 4, justifyContent:'center' ,alignContent: 'center',}}>
      <App/>
    </View>
  )
}

export default Index
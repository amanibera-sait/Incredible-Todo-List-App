import { View, Text } from 'react-native'
import React from 'react'
import Custompropex from '../components/custompropex'
import Multipleprops from '../components/multipleprops'
import Arraycustomprops from '../components/arraycustomprops'

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Custompropex/>
      <Multipleprops/>
      <Arraycustomprops/>
    </View>
  )
}

export default Index
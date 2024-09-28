import { View, Text } from 'react-native'
import React from 'react'
import Childarray from './childarray'

const Arraycustomprops = () => {
    const items=["Apples", "Oranges", "Banana", "Mangos"]
  return (
    <View style={{ marginVertical: 14 }}>
      <Childarray items={items}/>
    </View>
  )
}

export default Arraycustomprops
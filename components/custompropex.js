import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'


//parent component
const Custompropex = () => {
  return (
    <View>
      <Childcomponent name="John" status="Software Developer"/>
    </View>
  )
}

export default Custompropex

// child component
const Childcomponent = (props) => {
  return(
    <View>
      <Text style={{fontSize: 20, fontWeight: 500}}>Name: {props.name}</Text>
      <Text style={{fontSize: 20}}>Status: {props.status}</Text>
    </View>
  )
}
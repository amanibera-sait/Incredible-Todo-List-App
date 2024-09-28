import { View, Text } from 'react-native'
import React from 'react'

const Childarray = ({items}) => {
  return (
    <View>
        {items.map((item, index)=>(
            <Text key={index} style={{ fontSize: 20, marginVertical: 14 }}>
                Item: {item} present at index {index} 
            </Text>
        ))}
    </View>
  )
}

export default Childarray
import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Button = ({ Title }) => {
  return (
    <View style={tw`bg-blue-500 mr-2 p-3 px-5 text-white rounded-xl hover:bg-blue-300 transition flex flex-row items-center justify-center`}>
      <Text style={tw`text-white`}> {Title} </Text>    </View >
  )
}

export default Button
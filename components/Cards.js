import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import tw from 'twrnc'
import Card from './Card'

const Cards = () => {
    return (
        <View>
            <ScrollView horizontal style={tw`mb-2`} >

                <Card source={require('../assets/images/freeFire.png')} Name="Free Fire" />
                <Card source={require('../assets/images/angryBirds.png')} Name="Angry Birds" />
                <Card source={require('../assets/images/altosAdventure.png')} Name="Altos Adventure" />
                <Card source={require('../assets/images/zoobaGame.png')} Name="Zooba Game" />







            </ScrollView>
        </View>
    )
}

export default Cards
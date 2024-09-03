import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Star from '../assets/icons/star'
import Download from '../assets/icons/download'
import MiniCard from './MiniCard'

const MiniCards = () => {
    return (
        <View style={tw`flex-col gap-2 flex w-full items-center flex`}>
            <MiniCard source={require('../assets/images/frag.png')} Name="Frag" Btn={"Install"} />
            <MiniCard source={require('../assets/images/zooba.png')} Name="Zooba" Btn={"Install"} />
            <MiniCard source={require('../assets/images/subway.png')} Name="Subway" Btn={"Install"} />

        </View>
    )
}

export default MiniCards
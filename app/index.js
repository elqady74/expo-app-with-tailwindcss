import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Download from '../assets/icons/download'
import Star from '../assets/icons/star'
import Topbar from '../components/Topbar';
import Title from '../components/Title'
import { Button } from 'react-native-web'
import Buttons from '../components/Buttons'
import FeaturedText from '../components/FeaturedText'
import Cards from '../components/Cards'
import TopActions from '../components/TopActions'
import MiniCards from '../components/MiniCards'


const index = () => {
    return (


        <ScrollView style={tw`flex-1 gap-5 p-5`} >
            <Topbar />
            <Title />
            <Buttons />
            <FeaturedText />
            <Cards />
            <TopActions />
            <MiniCards />
        </ScrollView>

    )

}

export default index
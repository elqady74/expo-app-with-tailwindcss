import { View, Text, ScrollViewBase, ScrollViewComponent } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Button from './Button'
import { ScrollView } from 'react-native-web'

const Buttons = () => {
    return (
        <View>

            <ScrollView horizontal style={tw`mb-3`}  >
                <Button Title="Action" />
                <Button Title="Adventure" />
                <Button Title="Games" />
                <Button Title="Puzzels" />
                <Button Title="Mind map" />
                <Button Title="Bank" />
                <Button Title="car race" />
                <Button Title="Subway" />







            </ScrollView>
        </View>



    )
}

export default Buttons
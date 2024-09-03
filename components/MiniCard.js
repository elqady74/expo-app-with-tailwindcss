import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Star from '../assets/icons/star';
import Download from '../assets/icons/download';

const MiniCard = ({ source, Name, Btn }) => {
    return (
        <View style={tw`w-full py-3 bg-blue-300 p-3 rounded-xl flex flex-row justify-start items-center gap-3`}>
            <Image source={source} style={tw`h-30 w-30 rounded-xl `} />

            <View style={tw`w-[100px] flex-col gap-2`}>
                <Text style={tw`text-2xl`}>{Name}</Text>
                <View style={tw`flex-row gap-3`}>
                    <View style={tw`flex-row items-center gap-2`}>
                        <Star />
                        <Text style={tw`text-white`}>4.5</Text>
                    </View>
                    <View style={tw`flex-row items-center gap-3`}>
                        <Download />
                        <Text style={tw`text-white`}>10M</Text>
                    </View>
                </View>
            </View>
            <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>{Btn}</Text>
        </View>
    );
};

export default MiniCard;

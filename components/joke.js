import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import random from "../assets/random.png";
import tw from "twrnc";
import useFetch from "../utils/useFetch"

const Joke = () => {

  const { data, isLoading, error } = useFetch("https://official-joke-api.appspot.com/jokes/random");

  return (
    <ScrollView style={[tw`flex flex-col px-8 mb-[35px]`]}>
      <View style={[tw`flex flex-row items-center mb-[25px]`]}>
        <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]}>
          Random Joke
        </Text>
        <Image
          source={random}
          style={[tw`flex w-[20px] h-[20px]`]}
          contentFit="cover"
        />
      </View>
      <View style={[tw`flex flex-row items-center mb-[25px]`]}>
        <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]}>
          Type : 
        </Text>
        <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]} >{data["type"]}</Text>
      </View>

      <View style={[tw`flex flex-row items-center mb-[40px]`]}>
        <Text style={[tw`text-2xl text-[#9E1EBE] font-extrabold mr-[25px]`]}>
          -
        </Text>
        <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold `]} >{data["setup"]}</Text>
      </View>

      <View style={[tw`flex flex-row p-2 bg-[#9E1EBE] rounded-full mb-[40px]`]} ></View>

      <View style={[tw`flex flex-row items-center mb-[80px]`]}>
        <Text style={[tw`text-2xl text-[#9E1EBE] font-extrabold mr-[25px]`]}>
          -
        </Text>
        <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold`]} >{data["punchline"]}</Text>
      </View>

    </ScrollView>
  );
};

export default Joke;

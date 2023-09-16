import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import tw from "twrnc";
import { Image } from "expo-image";
import random from "../assets/random.png";
import group from "../assets/group.png";
import acc from "../assets/acc.png";
import cost from "../assets/cost.png";
import heart from "../assets/heart.png";
import { router } from "expo-router";

const goRandom = (key) => {
  router.push("/activity/"+key)
}

const Home = () => {
  return (
    <ScrollView style={[tw`flex flex-col px-8`]}>
      <View style={[tw`flex flex-col mb-[45px]`]}>
        <View style={[tw`flex flex-row items-center mb-[25px]`]}>
          <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]}>
            Random
          </Text>
          <Image
            source={random}
            style={[tw`flex w-[20px] h-[20px]`]}
            contentFit="cover"
          />
        </View>

        <TouchableOpacity onPress={() => goRandom("random")}
          style={[
            tw`items-center justify-center bg-[#9E1EBE] rounded-full p-4 `,
          ]}
        >
            <Text style={[tw`text-white font-extrabold`]}>Generate Random</Text>
          
        </TouchableOpacity>
      </View>

      <View style={[tw`flex flex-col mb-[45px]`]}>
        <View style={[tw`flex flex-row items-center mb-[25px]`]}>
          <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]}>
            Generate from favourites
          </Text>
          <Image
            source={heart}
            style={[tw`flex w-[20px] h-[20px]`]}
            contentFit="cover"
          />
        </View>

        <TouchableOpacity
          onPress={() => goRandom("favourite")}
          style={[
            tw`items-center justify-center bg-[#9E1EBE] rounded-full p-4 `,
          ]}
        >
          <Text style={[tw`text-white font-extrabold`]}>
            Generate from favourites
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[tw`flex flex-col mb-[45px]`]}>
        <View style={[tw`flex flex-row items-center mb-[25px]`]}>
          <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]}>
            Generate from category
          </Text>
          <Image
            source={random}
            style={[tw`flex w-[20px] h-[20px]`]}
            contentFit="cover"
          />
        </View>

        <TouchableOpacity
          style={[
            tw`items-center justify-center bg-[#9E1EBE] rounded-full p-4 `,
          ]}
        >
          <Text style={[tw`text-white font-extrabold`]}>
            {" "}
            Generate from category
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[tw`flex flex-col mb-[45px]`]}>
        <Text
          style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px] mb-[25px]`]}
        >
          Generate Custom
        </Text>

        <View style={tw`flex flex-row items-center mb-[20px]`}>
          <Image
            source={group}
            style={[tw`flex w-[30px] h-[30px] mr-[8px]`]}
            contentFit="cover"
          />
          <Text style={[tw` font-extrabold text-[#9E1EBE] mr-[8px]`]}>Min</Text>
          <TextInput
            style={[
              tw`flex flex-row bg-[#F1F1F1] p-3 rounded-xl text-[#9E1EBE] w-[100px]`,
            ]}
          />
        </View>

        <View style={tw`flex flex-row items-center mb-[20px]`}>
          <Image
            source={cost}
            style={[tw`flex w-[30px] h-[30px] mr-[8px]`]}
            contentFit="cover"
          />
          <Text style={[tw` font-extrabold text-[#9E1EBE] mr-[8px]`]}>Max</Text>
          <TextInput
            style={[
              tw`flex flex-row bg-[#F1F1F1] p-3 rounded-xl text-[#9E1EBE] w-[100px]`,
            ]}
          />
        </View>

        <View style={tw`flex flex-row items-center mb-[20px]`}>
          <Image
            source={acc}
            style={[tw`flex w-[30px] h-[30px] mr-[8px]`]}
            contentFit="cover"
          />
          <Text style={[tw` font-extrabold text-[#9E1EBE] mr-[8px]`]}>Min</Text>
          <TextInput
            style={[
              tw`flex flex-row bg-[#F1F1F1] p-3 rounded-xl text-[#9E1EBE] w-[100px]`,
            ]}
          />
        </View>

        <TouchableOpacity
          style={[
            tw`items-center justify-center bg-[#9E1EBE] rounded-full p-4 `,
          ]}
        >
          <Text style={[tw`text-white font-extrabold`]}>Generate Custom</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

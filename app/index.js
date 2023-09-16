import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Link,
} from "react-native";
import tw from "twrnc";
import { Image } from "expo-image";
import home from "../assets/home.png";
import categories from "../assets/categories.png";
import laugh from "../assets/laugh.png";
import Home from "../components/home";
import Settings from "../components/settings";
import Joke from "../components/joke";

const Container = () => {
    const [activeComponent, setActiveComponent] = useState("Home");
  
  
    return (
      <View style={[tw`flex flex-col w-full h-full`]}>
        <View style={[tw`flex flex-col h-[150px] w-full justify-center`]}>
          <Text style={[tw`text-center text-3xl font-extrabold text-[#9E1EBE]`]}>
            Activ.io
          </Text>
        </View>
        
        {activeComponent === "Home" && <Home />}
        {activeComponent === "Settings" && <Settings />}
        {activeComponent === "Joke" && <Joke />}
  
        <View
          style={[
            tw`flex flex-row my-[8px] mx-[35px] mb-[15px] rounded-2xl bg-[#9E1EBE] p-4 justify-between`,
          ]}
        >
          <TouchableOpacity onPress={() => setActiveComponent("Settings")} activeOpacity={0.3}>
            <Image
              source={categories}
              style={[tw`flex w-[30px] h-[30px]`]}
              contentFit="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveComponent("Home")} activeOpacity={0.3}>
            <Image
              source={home}
              style={[tw`flex w-[30px] h-[30px]`]}
              contentFit="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveComponent("Joke")} activeOpacity={0.3}>
            <Image
              source={laugh}
              style={[tw`flex w-[30px] h-[30px]`]}
              contentFit="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );

};

export default Container;

import React, { useState, useEffect  } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { Dropdown } from "react-native-element-dropdown";
import tw from "twrnc";
import heart from "../assets/heart.png";
import theme from "../assets/theme.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
  console.log("INFO - STORED VALUE IN FAVOURITE")
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    console.log(result)
    return result
  } else {
    return null
  }
}

const Settings = () => {

  const data = [
    { label: "Education", value: "education" },
    { label: "Recreational", value: "recreational" },
    { label: "Social", value: "social" },
    { label: "Diy", value: "diy" },
    { label: "Charity", value: "charity" },
    { label: "Cooking", value: "cooking" },
    { label: "Relaxation", value: "relaxation" },
    { label: "Music", value: "music" },
    { label: "Busywork", value: "busywork" },
  ];
  const [value, setValue] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getValueFor("favourite");
      setValue(result);
    }

    fetchData();
  }, []); 

  return (
    <ScrollView style={[tw`flex flex-col px-8 mb-[35px]`]}>
      <View style={[tw`flex flex-row items-center mb-[25px]`]}>
        <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]}>
          Choose your favourite category
        </Text>
        <Image
          source={heart}
          style={[tw`flex w-[20px] h-[20px]`]}
          contentFit="cover"
        />
      </View>
      <Dropdown
        style={[tw`text-[#9E1EBE] mb-[25px]`]}
        placeholderStyle={[tw`text-[#9E1EBE] font-extrabold`]}
        selectedTextStyle={[tw`text-[#9E1EBE]`]}
        iconStyle={[]}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Category"
        value={value}
        onChange={(item) => {
          setValue(item.value);
          save("favourite", item.value)
        }}
        renderLeftIcon={() => (
          <AntDesign style={[tw`mr-[8px]`]} color="#9E1EBE" name="Safety" size={20} />
        )}
      />
      <View style={[tw`flex flex-col mb-[45px]`]}>
        <View style={[tw`flex flex-row items-center mb-[25px]`]}>
          <Text style={[tw`text-lg text-[#9E1EBE] font-extrabold mr-[8px]`]}>
            Choose theme
          </Text>
          <Image
            source={theme}
            style={[tw`flex w-[20px] h-[20px]`]}
            contentFit="cover"
          />
        </View>
        <View style={[tw`flex flex-row items-center justify-around mb-[25px]`]}>
          <TouchableOpacity
            style={[
              tw`items-center justify-center bg-white rounded-full p-4 shadow-2xl mr-[8px] px-[40px]`,
            ]}
          >
            <Text style={[tw`text-[#9E1EBE] font-extrabold`]}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`items-center justify-center bg-[#717171] rounded-full p-4 shadow-2xl px-[40px]`,
            ]}
          >
            <Text style={[tw`text-white font-extrabold`]}>Dark</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

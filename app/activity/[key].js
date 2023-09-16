import React, { useState, useEffect} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import { Image } from "expo-image";
import heart from "../../assets/heart.png";
import reload from "../../assets/reload.png";
import puzzle from "../../assets/puzzle.png";
import group from "../../assets/group.png";
import acc from "../../assets/acc.png";
import cost from "../../assets/cost.png";
import { router, useSearchParams  } from "expo-router";
import useFetch from "../../utils/useFetch"
import * as SecureStore from 'expo-secure-store';


const goHome = () => {
  router.push("/");
};

const refresh = () => {
  router.replace("/activity")
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

const Activity = () => {
  const params = useSearchParams();
  const [fav, setFav] = useState(null);
  const [url, setUrl] = useState("");
  const [isLoadingFav, setIsLoadingFav] = useState(true); // Loading state for fav
  const [isLoadingUrl, setIsLoadingUrl] = useState(true)

  useEffect(() => {
  // Construct the URL based on params.key and fav
  if (params.key === "favourite" && fav !== null) {
    const constructedUrl = `http://www.boredapi.com/api/activity?type=${fav}`;
    console.log("Constructed URL:", constructedUrl); // Add this line for debugging
    setUrl(constructedUrl);
  } else if (params.key === "random") {
    const constructedUrl = "http://www.boredapi.com/api/activity/";
    console.log("Constructed URL:", constructedUrl); // Add this line for debugging
    setUrl(constructedUrl);
  }
  setIsLoadingUrl(false);
}, [params.key, fav]);

  const { data, isLoading: isLoadingData, error } = useFetch(url);
  const refresh = () => {
    router.replace("/activity/"+params.key)
  }

  if (isLoadingFav || isLoadingData || isLoadingUrl) {
    // Render a loading indicator while waiting for data and URL construction
    return (
      <View style={[tw`flex flex-col h-full w-full`]}>
        <ActivityIndicator size="large" color="#9E1EBE" />
      </View>
    );
  }

  return (
    <View style={[tw`flex flex-col h-full w-full`]}>
      <View style={[tw`flex flex-col h-[150px] w-full justify-center`]}>
        <Text style={[tw`text-center text-3xl font-extrabold text-[#9E1EBE]`]}>
          Activ.io
        </Text>
      </View>
      <ScrollView style={[tw`flex flex-col px-8`]}>
        <View style={[tw`flex flex-row items-center mb-[25px] justify-center`]}>
          <Text style={[tw`text-3xl text-[#9E1EBE] font-extrabold mr-[8px]`]}>
            {data["type"]}
          </Text>
          <Image
            source={heart}
            style={[tw`flex w-[20px] h-[20px]`]}
            contentFit="cover"
          />
        </View>
        <View style={[tw`flex flex-row items-center mb-[45px]`]}>
          <Image
            source={puzzle}
            style={[tw`flex w-[30px] h-[30px] mr-[25px]`]}
            contentFit="cover"
          />
          <Text
            style={[tw`flex flex-col text-[#9E1EBE] font-extrabold mr-[8px]`]}
          >
            {data["activity"]}
          </Text>
        </View>
        <View style={[tw`flex flex-row items-center mb-[45px]`]}>
          <Image
            source={group}
            style={[tw`flex w-[30px] h-[30px] mr-[25px]`]}
            contentFit="cover"
          />
          <Text
            style={[tw`flex flex-col text-[#9E1EBE] font-extrabold mr-[8px]`]}
          >
            {data["participants"]}
          </Text>
        </View>
        <View style={[tw`flex flex-row items-center mb-[45px]`]}>
          <Image
            source={cost}
            style={[tw`flex w-[30px] h-[30px] mr-[25px]`]}
            contentFit="cover"
          />
          <Text
            style={[tw`flex flex-col text-[#9E1EBE] font-extrabold mr-[8px]`]}
          >
            {data["price"]} $
          </Text>
        </View>
        <Text
          style={[tw`flex flex-col text-[#9E1EBE] font-extrabold mb-[25px]`]}
        >
          Accessibility
        </Text>
        <View style={[tw`flex flex-row items-center mb-[25px]`]}>
          <Image
            source={acc}
            style={[tw`flex w-[30px] h-[30px] mr-[25px]`]}
            contentFit="cover"
          />
          <Text
            style={[tw`flex flex-col text-[#9E1EBE] font-extrabold mr-[8px]`]}
          >
            {data["accessibility"]}
          </Text>
        </View>
      </ScrollView>
      <View style={[tw`flex flex-row p-8`]}>
        <TouchableOpacity
        onPress={goHome}
        activeOpacity={0.3}
          style={[
            tw` flex flex-row items-center justify-center bg-[#9E1EBE] rounded-full py-2 flex-1 mr-[15px]`,
          ]}
        >
          <Text style={[tw`text-white font-extrabold`]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={refresh} >
          <Image
            source={reload}
            style={[tw`flex w-[50px] h-[50px]`]}
            contentFit="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Activity;

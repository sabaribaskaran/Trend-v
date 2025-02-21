import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native'
import React from 'react'
import { Redirect, router  } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { images } from '../constants';
import { CustomButton} from "../components";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView >
    <SafeAreaView className = "bg-primary">
      
        <ScrollView contentContainerStyle = {{ Height: '100%', paddingBottom: 100}}
        >
          <View className = "w-full justify-center items-center min-h-screen px-4">
            <Image
              source = {images.logo}
              className = "w-[130px] h-[84px]"
               resizeMode='contain'
            /> 
            <Image
              source={images.cards}
              className = "max-w-[380px] w-full h-[298px]"
              resizeMode='contain'
            />
            <View className="relative mt-5">
              <Text className = "text-3xl text-white font-bold text-center"> Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
              </Text>
            
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                resizeMode='contain'
              />
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>

        <StatusBar backgroundColor='#161622' style="light" />

        

    </SafeAreaView>
    </GestureHandlerRootView>
  );
}


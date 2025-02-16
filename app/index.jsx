import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { images } from '../constants';

export default function HomeScreen() {
  return (
    <SafeAreaView className = "bg-red-200 h-full">
      <GestureHandlerRootView>
        <ScrollView contentContainerStyle = {{ height: '100%' }}
        >
          <View className = "w-full flex justify-center items-center h-full px-4">
            <Image
              source = {images.logo}
              className = "w-[130px] h-[84px]"
              resizeMode="contain" 
            /> 
            
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}


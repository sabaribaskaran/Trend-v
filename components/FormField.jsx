import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
// import { TextInput } from 'react-native-gesture-handler'
import { icons } from '../constants';


const  FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      {/* <Text className="px-2 text-gray-100 font-pmedium">FormField</Text> */}
      <View className="border-2 flex-row   border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center" >
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() =>
            setShowPassword(!showPassword)
          }>
            <Image source={!showPassword ? icons.eye : icons.eyehide } className="w-6 h-6"/>

        </TouchableOpacity>) }

        
      </View>
    </View>
  )
}

export default  FormField

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { images } from '../../constants';
import { FormField, CustomButton } from "../../components";
// import { CustomButton }  from "../../components"
import { Link } from "expo-router";  


const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmittting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <GestureHandlerRootView >
      <SafeAreaView className="bg-primary  h-full">
        <ScrollView className="bg-white" >
          <View className="w-full justify-center bg-indigo-500 min-h-[83vh] px-4 my-6 "
          //  style={{
          //   minHeight: Dimensions.get("window").height - 100,
          // }}
          >

            <Image source={images.logo}
              resizeMode='contain' className="w-[115px] h-[35px] "
            />
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold bg-black">Log in to Aora</Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"

            />


            <CustomButton
              title='Sign In'
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmittting}
            />

            <View className="justify-center pt-5     gap-2  flex-row">
              <Text className="text-lg text-gray-100 font-pregular">Don't have account?</Text>
              <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
            </View>



          </View>
          {/* <View>
          <Text>good hi houjihsdfffffffffffffffffffffffffffklsdfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhklsdfhkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>
          </View> */}



        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default SignIn

const styles = StyleSheet.create({})
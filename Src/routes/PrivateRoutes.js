import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AboutScreen } from '../screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const PrivateRoutes = () => {
  return (
   <Stack.Navigator initialRouteName='AboutScreen'>
   <Stack.Screen name='AboutScreen' component={AboutScreen} options={{
    headerShown:false
   }}/>

   </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})
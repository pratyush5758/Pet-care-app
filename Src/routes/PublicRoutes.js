import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginScreen } from '../screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const PublicRoutes = () => {
  return (
  <Stack.Navigator initialRouteName='LoginScreen'>
    <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
  )
}

export default PublicRoutes

const styles = StyleSheet.create({})
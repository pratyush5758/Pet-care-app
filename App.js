/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './Src/Routes';



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutScreen, LoginScreen } from './Src/screen';
import { NavigationContainer } from '@react-navigation/native';
import AppContextProvider from './Src/contexts/AppContextProvider';

const Drawer = createDrawerNavigator();
const App = () => {
  

  return (
    // <Text>pratyush</Text>
    <NavigationContainer>
     <AppContextProvider>
     <Routes/>

     </AppContextProvider>
    </NavigationContainer>
       

  );
};

const styles = StyleSheet.create({
 
});

export default App;

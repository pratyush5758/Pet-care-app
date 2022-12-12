import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../contexts/AppContextProvider';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setIsLoggedIn } = useAppContext()
  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <View>
        <Image source={IMAGES.DOG} style={styles.img}/>
      </View>
      <View style={styles.mainview}>
        <View style={styles.container}>
          <Text style={styles.pretext}>Pet Care In Your Neighbourhood</Text>
        </View>
        <View style={styles.primaryview}>
          <Text style={styles.primarytext}>Connect with 5-star pet caregivers near you who offer boarding, walking, house, sitting or day care.</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={{marginVertical:5,fontSize:20,color:'white'}}>Swipe To Start</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
      
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  img:{
    width: 411, 
    height: 520,
  },
  mainview: {
    backgroundColor: '#fff',
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 320,
  },
  pretext: {
    textAlign: 'center',
    fontSize: 29,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 35,
    letterSpacing:1

  },
  container: {
    marginTop: 50,
  },
  primaryview:{
    marginHorizontal:30,
    padding:2,
    marginVertical:20,
    
    alignItems:'center'
  },
  primarytext:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    lineHeight:20,
    
  },
  btn:{
    backgroundColor:'#DFA941',
    alignItems:'center',
    marginHorizontal:30,
    height:40,
    borderRadius:10,
    marginVertical:25
  },
    
    
});

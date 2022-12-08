import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AboutScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView>
        <View>
          <Image source={IMAGES.DOG} style={styles.img} />
        </View>
        <View style={styles.main}>
          <View>
            <Text style={styles.petname}>Itachi</Text>
            <Text style={styles.year}>French Bulldog 1y 4m</Text>
          </View>
          <View style={styles.container}>
            <Ionicons name="female" size={30} color={'white'} />
          </View>
        </View>
        <View style={styles.about}>
          <MaterialIcons name="pets" size={25} color={'black'} />
          <Text style={styles.itachi}>About Itachi</Text>
        </View>
        <View style={styles.weight}>
          <View style={styles.data}>
            <Text style={styles.datatext}>Weight</Text>
            <Text style={styles.text}>5,5kg</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.datatext}>Height</Text>
            <Text style={styles.text}>42 cm</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.datatext}>Color</Text>
            <Text style={styles.text}>Brown</Text>
          </View>
        </View>
        <View style={styles.describtion}>
          <Text style={styles.describtiontext}>
            My dog is incredibly and unconditionally loyal to me. He loves me as
            much as I love him or sometimes more.
          </Text>
        </View>
        <View style={styles.behavior}>
          <MaterialIcons name="pets" size={25} color={'black'} />
          <Text style={styles.itachi}>ltachi behavior</Text>
        </View>
        <View style={styles.firstcontainer}>
          <View
            style={{
              borderWidth: 1,
              padding: 1,
              height: 50,
              width: 160,
              borderRadius: 10,
              borderColor: '#f8c442',
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                marginVertical: 10,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Leash trained
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 1,
              height: 50,
              width: 160,
              borderRadius: 10,
              marginLeft: 10,
              borderColor: '#f8c442',
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                marginVertical: 10,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Friendly with cats
            </Text>
          </View>
        </View>
        <View style={styles.secondcontainer}>
          <View
            style={{
              borderWidth: 1,
              padding: 1,
              height: 50,
              width: 160,
              borderRadius: 10,
              borderColor: '#f8c442',
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                marginVertical: 10,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Active
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 1,
              height: 50,
              width: 160,
              borderRadius: 10,
              marginLeft: 10,
              borderColor: '#f8c442',
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                marginVertical: 10,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Tries to eat things
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  img: {
    width: 411,
    height: 400,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -45,
    borderRadius: 10,
    height: 80,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  container: {
    backgroundColor: '#DFA941',
    width: 30,
    padding: 1,
    borderRadius: 5,
    height: 35,
    alignItems: 'center',
    marginLeft: 100,
  },
  petname: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 17,
    color: 'black',
  },
  about: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  itachi: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  weight: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  data: {
    margin: 10,
    backgroundColor: '#FEF8E8',
    height: 80,
    width: 100,
    padding: 2,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  datatext: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',

    padding: 1,
    marginVertical: 4,
  },
  text: {
    color: '#f8c442',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
    padding: 1,
  },
  describtion: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  describtiontext: {
    lineHeight: 20,
    fontSize: 16,
    fontWeight: '400',
  },
  behavior: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  firstcontainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  secondcontainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

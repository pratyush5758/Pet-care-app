import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useAppContext } from '../../contexts/AppContextProvider'

const CustomDrawer = () => {
    const navigation = useNavigation()
    const {setIsLoggedIn} = useAppContext()
    const Drawer = [
        {
            id: '1',
            title: "Home",
            onPress:()=> navigation.navigate('Home')
   },
{
    id: '2',
        title: "Logout",  
        onPress:()=> setIsLoggedIn(false)
   },
{
    id: '3',
        title: "Register",  
        onPress:()=> {}
   },
{
    id: '4',
        title: "Dashboard",
        onPress:()=> {}
   },
    ]
return (
    <View>
        <FlatList data={Drawer} renderItem={({ item }) => (
            <TouchableOpacity onPress={item.onPress}>
                <Text>{item?.title}</Text>
            </TouchableOpacity>
        )} />
    </View>
)
}

export default CustomDrawer

const styles = StyleSheet.create({})

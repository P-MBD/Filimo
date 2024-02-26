import React, {useEffect} from 'react';
import {View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from '../node_modules/axios/index';
export default function HomeScreen() {
    useEffect(() => {    
          axios.get('https://androidsupport.ir/pack/aparat/getBestVideos.php')
          .then(function(response){
            console.log(response)
          })
          .catch(function(error){
            console.log(error)
          })
     },[]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import SettingScreen from './screens/SettingScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
function App() {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
const HomeStackScreen=({navigation,route})=> (

      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          title:"Navin Learn",
          headerStyle:{backgroundColor:'#3f51b5'},
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
            alignSelf:'center',
          }
        }}
        />
        <HomeStack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen}
          options={({ route }) => ({ 
            headerStyle:{backgroundColor:'#3f51b5'},
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
              alignSelf:'center',
            },
            title: route.params.title })}
         />
      </HomeStack.Navigator>
    
  )
  return (
   <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Category" component={CategoryScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
   </NavigationContainer>
  );
}



export default App;

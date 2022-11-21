import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import ProfileScreen from './ProfileScreen.js';
import Dashboard from './Dashboard';
import LearnFlatList from './LearnFlatList';
import Settings from './Settings';
import Chatting from './Chatting';
import SettingsScreen from './SettingsScreen';
import HomeForClass from './HomeForClass';
import HomeForFunctional from './HomeForFunctional';
import SettingForClass from './SettingForClass';
import RegisterationForm from './RegisterationForm';
import DeleteSearch from './DeleteSearch';
import SectionListConversion from './SectionListConversion'
import Flatlist from './Flatlist'
import Login from './Login';
import Sectionlist from './Sectionlist';
import Signup from './Signup';

const Stack = createNativeStackNavigator();
export default function App(props) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor:'darkslateblue'},
          headerTitleStyle: {color: 'white', fontSize: 30},
          headerTintColor: 'white', headerTitleAlign: 'center'
        }}
      >
        
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
         <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="LearnFlatList" component={LearnFlatList} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="HomeForClass" component={HomeForClass} />
        <Stack.Screen name="HomeForFunctional" component={HomeForFunctional} />
        <Stack.Screen name="SettingForClass" component={SettingForClass} />
        <Stack.Screen name="RegisterationForm" component={RegisterationForm} />
        <Stack.Screen name="DeleteSearch" component={DeleteSearch} />
        <Stack.Screen name="SectionListConversion" component={SectionListConversion} />
        
        <Stack.Screen name="Flatlist" component={Flatlist} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sectionlist" component={Sectionlist} />
        <Stack.Screen name="Signup" component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

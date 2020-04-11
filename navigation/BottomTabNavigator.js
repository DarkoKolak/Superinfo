import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SuperinfoHome from '../screens/SuperinfoHome';
import Posts from "../components/Posts.js"



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Superinfo';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({headerTitleStyle: { alignSelf: 'center' }, headerTitle: <Text style={styles.headerText}> {getHeaderTitle(route)}</Text>,headerTintColor:'red',
    fontWeight: 'bold',headerStyle: {
      backgroundColor: 'white',
  },
 });

  return (
    <BottomTab.Navigator tabBarOptions={{activeTintColor: "red"}} initialRouteName={INITIAL_ROUTE_NAME}>

        <BottomTab.Screen
        name="Superinfo"
        component={SuperinfoHome}
        options={{
          title: 'Pocetna stranica',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
    default :
      return (
        <Text style={styles.header}>
          <Text>
          Superinfo
          </Text>
          <Text style={{color: "green", fontSize: 17}}> eco </Text> 

        </Text>);  
  }
}

const styles = StyleSheet.create({
  headerText: {
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: 25,
      flex: 1,
      flexDirection: "row",
  }, header:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }


});

import * as React  from 'react';
import {useState} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import Posts from "./components/Posts.js"
import CategoryApi from "./components/CategoryApi.js"

const Stack = createStackNavigator();
export const Context = React.createContext({drawerOpen: false});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  //State for the drawer

  const [drawerOpen, setDrawerOpen] = useState(0);

  const handleDrawer = () => {
    const newValue = !drawerOpen;
    setDrawerOpen(newValue);
  }


  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Context.Provider value={{
          drawerOpen: drawerOpen,
          handleChange: handleDrawer}}>
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen   name="Root" component={BottomTabNavigator} options={{  headerLeft: () => {
      return(
    <TouchableOpacity onPress={handleDrawer}>
    <Image style={{height:25,width:25,marginLeft: 20,marginTop: 5}} source={require("./assets/images/hamburger.png")} />
    </TouchableOpacity>
      )
    } }} />
            <Stack.Screen name="Category" component={CategoryApi}  options={{ headerTintColor: "red", title: superinfo }}  />
            <Stack.Screen name="Posts" component={Posts}  options={{ headerTintColor: "red", title: superinfo }}  />
          </Stack.Navigator>
        </NavigationContainer>
        </Context.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 25,
  }
});

const superinfo = <Text style={styles.header}><Text>Superinfo </Text><Text style={{color: "green", fontSize: 17}}>eco</Text></Text>;

// headerRight: () => {
//   if(this.props.navigation.state.routeName==="Superinfo"){
//     return(
//       <TouchableOpacity>
//   <Image style={{height:25,width:25,marginRight: 20,marginTop: 5}} source={require("./assets/images/hamburger.png")} />
//   </TouchableOpacity>
//     )
//   }

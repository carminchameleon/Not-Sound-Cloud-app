import React, { useState, createContext } from "react";
import { AppLoading } from "expo";
import { theme, flexCenter } from "./src/components/theme";
import * as Font from "expo-font";
import Welcome from "./src/screens/Welcome";
import CreateAccount from "./src/screens/CreateAccount";
import LoginScreen from "./src/screens/LoginScreen";
import CreateInfo from "./src/screens/CreateInfo";
import Tabs from "./src/routes/Tabs";
import styled, {
  createGlobalStyle,
  ThemePovider,
  css
} from "styled-components";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSwitchNavigator } from "react-navigation";
import { AsyncStorage } from "react-native";
// import * as firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyDVGoWvJ6GEd1_f_9AQqYFP6SPqrAAxlWI",
//   authDomain: "notsoundcloud-936fa.firebaseapp.com",
//   databaseURL: "https://notsoundcloud-936fa.firebaseio.com",
//   projectId: "notsoundcloud-936fa",
//   storageBucket: "notsoundcloud-936fa.appspot.com",
//   messagingSenderId: "186861741166",
//   appId: "1:186861741166:web:1129731203462fd708327f"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const getFonts = () =>
  Font.loadAsync({
    InterstateRegular: require("./src/assets/fonts/InterstateRegular.ttf"),
    InterstateThin: require("./src/assets/fonts/InterstateThin.ttf")
  });

const Stack = createStackNavigator();

export default function App() {
  console.log("토큰 있니", AsyncStorage.getItem("token"));
  const checkToken = () => {
    if (AsyncStorage.getItem("token") === null) {
      console.log("empty Token");
      return true;
    } else {
      console.log("get Token");
      return false;
    }
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (fontsLoaded) {
    <ThemePovider theme={theme} />;
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {checkToken() ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} />
            </>
          ) : (
            <Stack.Screen name="Welcome" component={Welcome} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

import React, { useState, createContext } from "react";
import { AppLoading } from "expo";
import { theme, flexCenter } from "./src/components/theme";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import Welcome from "./src/screens/Welcome";
import CreateAccount from "./src/screens/CreateAccount";
import LoginScreen from "./src/screens/LoginScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import CreateInfo from "./src/screens/CreateInfo";
import Main from "./src/routes/Main";

import styled, {
  createGlobalStyle,
  ThemePovider,
  css
} from "styled-components";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSwitchNavigator } from "react-navigation";
import { AsyncStorage } from "react-native";
import PlayerBar from "./src/components/PlayerBar";

const getFonts = () =>
  Font.loadAsync({
    InterstateRegular: require("./src/assets/fonts/InterstateRegular.ttf"),
    InterstateThin: require("./src/assets/fonts/InterstateThin.ttf")
  });

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    <ThemePovider theme={theme} />;
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
        <PlayerBar />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

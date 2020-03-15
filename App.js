import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./src/screens/Home";
import { AppLoading } from "expo";
import { theme, flexCenter } from "./src/components/theme";
import styled, {
  createGlobalStyle,
  ThemePovider,
  css
} from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "./src/screens/CreateAccount";
import LoginScreen from "./src/screens/LoginScreen";

const getFonts = () =>
  Font.loadAsync({
    InterstateRegular: require("./src/assets/fonts/InterstateRegular.ttf"),
    InterstateThin: require("./src/assets/fonts/InterstateThin.ttf")
  });

const RootStack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    <ThemePovider theme={theme} />;
    // return <Home />;
    return (
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="CreateAccount" component={CreateAccount} />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

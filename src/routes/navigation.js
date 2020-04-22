import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  useGestureHandlerRef
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "./Context";
import HomeScreen from "../screens/HomeScreen";
import Welcome from "../screens/Welcome";
import WelcomeScreen from "../screens/WelcomeScreen";
import CreateInfo from "../screens/CreateInfo";
import CreateAccount from "../screens/CreateAccount";
import LoginScreen from "../screens/LoginScreen";
import LoadingScreen from "../screens/LoadingScreen";
import StreamScreen from "../screens/StreamScreen";
import LibraryScreen from "../screens/LibraryScreen";
import SearchScreen from "../screens/SearchScreen";
import PlayerBar from "../screens/PlayerBar";
import PlayerScreen from "../screens/PlayerScreen";

import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { theme, flexCenter } from "../components/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderBackground } from "react-navigation-stack";

// 유저 확인 부분
const AuthStacks = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStacks.Navigator mode="modal">
    <AuthStacks.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AuthStacks.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ headerShown: false }}
    />
    <AuthStacks.Screen
      name="CreateInfo"
      component={CreateInfo}
      options={{ headerShown: false }}
    />
    <AuthStacks.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <AuthStacks.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </AuthStacks.Navigator>
);

// 메인 홈 탭 부분
const AppTabs = createBottomTabNavigator();
function AppTabScreen() {
  return (
    <AppTabs.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: "white",
        style: {
          backgroundColor: "rgb(17,17,17)",
          height: "10%",
          paddingBottom: "2%"
        }
      }}
    >
      <AppTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" color={color} size={32} />
          )
        }}
      />
      <AppTabs.Screen
        name="StreamScreen"
        component={StreamScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flash" color={color} size={30} />
          )
        }}
      />
      <AppTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" color={color} size={30} />
          )
        }}
      />
      <AppTabs.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="bar-chart" color={color} size={30} />
          )
        }}
      />
    </AppTabs.Navigator>
  );
}

const RootStack = createStackNavigator();
const RootStacksScreen = ({ userToken, isPlaying }) => (
  <RootStack.Navigator
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
  >
    {userToken ? (
      <RootStack.Screen name="AppTabScreen" component={AppTabScreen} />
    ) : (
      <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
    )}
    <RootStack.Screen name="MusicStackScreen" component={MusicStackScreen} />
  </RootStack.Navigator>
);

const MusicStacks = createStackNavigator();
const MusicStackScreen = () => (
  <MusicStacks.Navigator mode="modal">
    <MusicStacks.Screen name="PlayerBar" component={PlayerBar} />
    <MusicStacks.Screen name="PlayerScreen" component={PlayerScreen} />
  </MusicStacks.Navigator>
);

// 최종 랜더 되는 부분

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("Token");
      },

      signUp: () => {
        setIsLoading(false);
        setUserToken("Token");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
        setIsPlaying(false);
      }
      // isPlaying: () => {
      //   setIsPlaying(true);
      // }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStacksScreen userToken={userToken} />
        {isPlaying ? <PlayerBar /> : null}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

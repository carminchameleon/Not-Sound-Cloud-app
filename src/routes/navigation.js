import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  useGestureHandlerRef
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import PlayerBar from "../components/PlayerBar";
import PlayerScreen from "../screens/PlayerScreen";

import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { theme, flexCenter } from "../components/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderBackground } from "react-navigation-stack";

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
const RootStacksScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  return (
    <RootStack.Navigator headerMode="none">
      {isLoading ? (
        <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
      ) : user ? (
        <RootStack.Screen name="AppTabScreen" component={AppTabScreen} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStacksScreen />
    </NavigationContainer>
  );
};

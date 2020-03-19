import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";
import { theme, flexCenter } from "../components/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderBackground } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";
import StreamScreen from "../screens/StreamScreen";
import PlayerBar from "../components/PlayerBar";
const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" color={color} size={32} />
          )
        }}
      />
      <Tab.Screen
        name="StreamScreen"
        component={StreamScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flash" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="bar-chart" color={color} size={30} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;

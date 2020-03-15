import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CreateAccount from "../screens/CreateAccount";
const screens = {
  Home: {
    screen: Home
  },
  CreateAccount: {
    screen: CreateAccount
  }
};
const HomeStack = createStackNavigator(screens);
// 어떤 스크린들을 넣을 것인지

export default createAppContainer(HomeStack);

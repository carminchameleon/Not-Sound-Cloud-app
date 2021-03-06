import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import styled from "styled-components";
import * as Font from "expo-font";
import { addListener } from "expo/build/Updates/Updates";
import CreateAccount from "./CreateAccount";
import LoginScreen from "./LoginScreen";

function WelcomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  return (
    <Container>
      <BackgroundImage
        source={require("../assets/images/2.jpg")}
      ></BackgroundImage>
      <Logo
        source={require("../assets/images/SClogo.png")}
        resizeMode="contain"
      ></Logo>
      <TextBox>
        <Sentence>Find music you love.</Sentence>
        <Sentence>Discover new artists.</Sentence>
      </TextBox>

      <ButtonBox>
        <SignUpWrap>
          <SignUpBox
            activeOpacity={0.6}
            onPress={() => navigation.push("CreateAccount")}
          >
            <SignUp>Create an account</SignUp>
          </SignUpBox>
        </SignUpWrap>
        <SignInWrap>
          <SignInBox
            activeOpacity={0.6}
            onPress={() => navigation.push("LoginScreen")}
          >
            <SignIn>I already have an account</SignIn>
          </SignInBox>
        </SignInWrap>
      </ButtonBox>
    </Container>
  );
}

export default WelcomeScreen;

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: "InterstateRegular";
  padding: 0;
  position: relative;
  background-color: black;
  justify-content: flex-start;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Logo = styled.Image`
  margin-top: 15%;
  width: 33%;
  height: 10%;
`;

const TextBox = styled.View`
  position: absolute;
  top: 70.7%;
  width: 100%;
  height: 6%;
  display: flex;
  align-items: center;
`;

const Sentence = styled.Text`
  text-align: center;
  width: 60%;
  height: 24px;
  color: white;
  font-size: 25px;
  font-family: "InterstateRegular";
  margin: 0;
  padding: 0;
`;

const ButtonBox = styled.View`
  position: absolute;
  top: 64%;
  width: 100%;
  height: 14%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

const SignUpBox = styled.TouchableOpacity`
  z-index: 100;
  width: 90%;
  height: 53px;
  border-radius: 4px;
  background-color: #ff5500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpWrap = styled.View`
  width: 90%;
  height: 53px;
  border-radius: 4px;
  background-color: #ff5500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUp = styled.Text`
  margin-top: 6px;

  font-family: "InterstateRegular";
  color: white;
  font-size: 18px;
`;

const SignInBox = styled.TouchableOpacity`
  width: 90%;
  height: 53px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInWrap = styled.View`
  width: 90%;
  height: 53px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignIn = styled.Text`
  margin-top: 6px;
  font-family: "InterstateRegular";
  color: rgb(88, 88, 88);
  font-size: 18px;
  align-items: center;
  padding: 0;
`;

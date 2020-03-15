import React, { Component } from "react";
import styled from "styled-components";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  modal,
  Alert,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme, flexCenter } from "../components/theme";

export class SocialLogin extends Component {
  render() {
    return (
      <SocialContainer>
        <SocialBox>
          <SocialArea>
            <SocialIcon>
              <Ionicons name="logo-facebook" size={40} color={"#3b5998"} />
            </SocialIcon>
            <SocialTextBox>
              <SocialText>Sign in with Facebook</SocialText>
            </SocialTextBox>
          </SocialArea>
        </SocialBox>
        <SocialBox>
          <SocialArea>
            <SocialIcon>
              <GoogleIcon
                source={require("../assets/images/googleLogo.png")}
              ></GoogleIcon>
            </SocialIcon>
            <SocialTextBox>
              <SocialText>Sign in with Google</SocialText>
            </SocialTextBox>
          </SocialArea>
        </SocialBox>
      </SocialContainer>
    );
  }
}

export default SocialLogin;

const SocialContainer = styled.View`
  margin-top: 4%;
  background-color: ${theme.lightGrayA};
  width: 100%;
  height: 20%;
  padding: 0;
`;

const SocialBox = styled.View`
  width: 100%;
  height: 55%;
  background-color: transparent;
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.4px;
  border-bottom-color: ${theme.lightGrayA};
  border-bottom-width: 0.4px;
`;

const SocialArea = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
`;

const SocialIcon = styled.View`
  width: 15%;
  ${flexCenter}
  padding: 0 3% 0 4%;
`;
const SocialTextBox = styled.View`
  width: 70%;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const SocialText = styled.Text`
  font-family: "InterstateRegular";
  font-size: 16px;
  color: ${theme.chacoal};
  line-height: 20;
  margin-top: 1%;
`;

const GoogleIcon = styled.Image`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid ${theme.lightGrayB};
`;

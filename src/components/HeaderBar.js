import React, { useState } from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image
} from "react-native";
import { theme, flexCenter } from "../components/theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HomeData from "../../Public/Data/Homedata";

function HeaderBar() {
  return (
    <HeaderContainer>
      <HeaderBox>
        <Header>Home</Header>
        <IconWrapper>
          <IconBox>
            <Icon>
              <Feather name="cast" size={24} color="rgb(101,101,101)" />
            </Icon>
          </IconBox>
          <IconBox>
            <Icon>
              <Feather
                name="arrow-up-circle"
                size={24}
                color="rgb(101,101,101)"
              />
            </Icon>
          </IconBox>
        </IconWrapper>
      </HeaderBox>
    </HeaderContainer>
  );
}

export default HeaderBar;

const HeaderContainer = styled.View`
  display: fixed;
  width: 100%;
  height: 85px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  border-bottom-color: ${theme.HeaderLine};
  border-bottom-width: 0.8px;
`;

const HeaderBox = styled.View`
  width: 100%;
  height: 50%;
  ${flexCenter};
  position: relative;
`;
const Header = styled.Text`
  width: 100%;
  height: 100%;
  font-family: "InterstateRegular";
  font-size: 17px;
  text-align: center;
  padding-top: 3%;
`;

const IconWrapper = styled.View`
  padding-top: 7%;
  width: 16%;
  height: 100%;
  position: absolute;
  left: 79%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconBox = styled.TouchableWithoutFeedback`
  width: 50px;
  height: 100%;
  background-color: yellow;
  display: flex;
`;

const Icon = styled.View`
  padding-top: 7%;
  height: 100%;
  ${theme.flexCenter}
`;

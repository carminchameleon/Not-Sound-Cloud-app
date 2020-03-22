import React, { useState, useContext } from "react";
import styled from "styled-components";
import { View, TouchableWithoutFeedback, Button } from "react-native";
import { theme, flexCenter } from "../components/theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../routes/Context";
function LibraryScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <TouchZone>
      <Wrapper>
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
                    onPress={() => signOut()}
                  />
                </Icon>
              </IconBox>
            </IconWrapper>
          </HeaderBox>
        </HeaderContainer>
        <BodyContainer>
          <TagContainer>
            <TagHeader>
              <TagName>Chill</TagName>
              <TagComment>
                Popular playlists from the SoundCloud community.
              </TagComment>
            </TagHeader>
            <TagBody></TagBody>
          </TagContainer>
        </BodyContainer>
      </Wrapper>
    </TouchZone>
  );
}

export default LibraryScreen;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${theme.lightGrayA};
  ${theme.flexCenter}
`;

const TouchZone = styled.TouchableWithoutFeedback`
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 10.5%;
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

const BodyContainer = styled.View`
  width: 100%;
  height: 89.5%;
`;

const TagContainer = styled.View`
  margin-top: 15px;
  width: 100%;
  height: 40%;
  background-color: white;
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.8px;
  border-bottom-color: ${theme.lightGrayB};
  border-bottom-width: 0.8px;
  display: flex;
  padding: 4%;
`;
const TagHeader = styled.View`
  flex: 2;
`;
const TagName = styled.Text`
  margin-top: 4%;
  font-size: 25px;
  font-family: "InterstateRegular";
  color: ${theme.MainFontChacole};
`;
const TagComment = styled.Text`
  margin: 2% 0;
  font-size: 15px;
  font-family: "InterstateRegular";
  color: ${theme.MainFontGray};
`;

const TagBody = styled.View`
  flex: 5;
`;

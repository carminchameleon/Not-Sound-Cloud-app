import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import { theme, flexCenter, ScrollView } from "../components/theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HeaderBar from "../components/HeaderBar";
import HomeData from "../../Public/Data/Homedata";
import PlayerBar from "./PlayerBar";
import {
  HeaderBackground,
  GestureHandlerRefContext
} from "react-navigation-stack";
import { AuthContext } from "../routes/Context";
import { useSafeArea } from "react-native-safe-area-context";

function StreamScreen() {
  return (
    <Wrapper>
      <HeaderContainer>
        <HeaderBox>
          <Header>Stream</Header>
          <IconWrapper>
            <IconBox>
              <Icon></Icon>
            </IconBox>
            <IconBox>
              <Icon>
                <Feather name="cast" size={24} color="rgb(101,101,101)" />
              </Icon>
            </IconBox>
          </IconWrapper>
        </HeaderBox>
      </HeaderContainer>
      <Body>
        <Container>
          <CardContainer>
            <InfoContainer>
              <PictureBox>
                <Picture
                  source={{
                    uri:
                      "https://i1.sndcdn.com/avatars-nYL1xyyMBwoo9YCA-IfUmsw-t500x500.jpg"
                  }}
                ></Picture>
              </PictureBox>
              <InfoBox>
                <TopInfo>
                  <Name>carminido</Name>
                  <Name style={{ color: `${theme.gray}` }}>
                    &nbsp;resposted a track
                  </Name>
                </TopInfo>
                <TimeInfo>2 weeks ago</TimeInfo>
              </InfoBox>
            </InfoContainer>
            <Bodycontainer>
              <AlbumBox>
                <AlbumCover
                  source={{
                    uri:
                      "https://i1.sndcdn.com/artworks-1ed033f4-8cef-44b0-a855-698e79d05806-0-t500x500.jpg"
                  }}
                ></AlbumCover>
                <Artist>REAll Grande</Artist>
                <Song>Bad Romance</Song>
                <Tag>World</Tag>
                <Duration>3:28</Duration>
              </AlbumBox>
              <BottomContainer>
                <Tag> ▷ 9,353</Tag>
              </BottomContainer>
              <BottomColor></BottomColor>
            </Bodycontainer>
          </CardContainer>
        </Container>
        <Container>
          <CardContainer>
            <InfoContainer>
              <PictureBox>
                <Picture
                  source={{
                    uri:
                      "https://i1.sndcdn.com/avatars-nYL1xyyMBwoo9YCA-IfUmsw-t500x500.jpg"
                  }}
                ></Picture>
              </PictureBox>
              <InfoBox>
                <TopInfo>
                  <Name>carminido</Name>
                  <Name style={{ color: `${theme.gray}` }}>
                    &nbsp;resposted a track
                  </Name>
                </TopInfo>
                <TimeInfo>2 weeks ago</TimeInfo>
              </InfoBox>
            </InfoContainer>
            <Bodycontainer>
              <AlbumBox>
                <AlbumCover
                  source={{
                    uri:
                      "https://i1.sndcdn.com/artworks-000261882173-b14ar2-t500x500.jpg"
                  }}
                ></AlbumCover>
                <Artist>REAll Grande</Artist>
                <Song>Bad Romance</Song>
                <Tag>World</Tag>
                <Duration>3:28</Duration>
              </AlbumBox>
              <BottomContainer>
                <Tag> ▷ 9,353</Tag>
              </BottomContainer>
              <BottomColor></BottomColor>
            </Bodycontainer>
          </CardContainer>
          <CardContainer>
            <InfoContainer>
              <PictureBox>
                <Picture
                  source={{
                    uri:
                      "https://i1.sndcdn.com/avatars-nYL1xyyMBwoo9YCA-IfUmsw-t500x500.jpg"
                  }}
                ></Picture>
              </PictureBox>
              <InfoBox>
                <TopInfo>
                  <Name>carminido</Name>
                  <Name style={{ color: `${theme.gray}` }}>
                    &nbsp;resposted a track
                  </Name>
                </TopInfo>
                <TimeInfo>2 weeks ago</TimeInfo>
              </InfoBox>
            </InfoContainer>
            <Bodycontainer>
              <AlbumBox>
                <AlbumCover
                  source={{
                    uri:
                      "https://i1.sndcdn.com/artworks-000201927280-2vsnux-t500x500.jpg"
                  }}
                ></AlbumCover>
                <Artist>REAll Grande</Artist>
                <Song>Bad Romance</Song>
                <Tag>World</Tag>
                <Duration>3:28</Duration>
              </AlbumBox>
              <BottomContainer>
                <Tag> ▷ 9,353</Tag>
              </BottomContainer>
              <BottomColor></BottomColor>
            </Bodycontainer>
          </CardContainer>
        </Container>
      </Body>
    </Wrapper>
  );
}

export default StreamScreen;

const Wrapper = styled.View`
  flex: 1;
`;

const Body = styled.ScrollView`
  flex: 1;
`;

const Container = styled.View`
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.8px;
  flex: 1;
  background-color: transparent;
`;

const TouchZone = styled.TouchableWithoutFeedback``;

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

const CardContainer = styled.View`
  width: 100%;
  height: 300px;
  margin-bottom: 3%;
`;

const InfoContainer = styled.View`
  display: flex;
  margin-top: 9px;
  margin : 9px
  flex-direction: row;
  margin-left: 9px;
  margin-right: 9px;
`;

const PictureBox = styled.View`
  width: 20px;
  flex: 1;
`;

const Picture = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50;
`;

const InfoBox = styled.View`
  flex: 9;
`;

const TopInfo = styled.View`
  display: flex;
  flex-direction: row;
`;

const Name = styled.Text`
  font-size: 12px;
  font-family: "InterstateRegular";
`;
const TimeInfo = styled.Text`
  font-size: 12px;
  color: ${theme.gray};
  font-family: "InterstateRegular";
`;

const Bodycontainer = styled.View`
  height: 300px;
`;

const AlbumCover = styled.Image`
  width: 100%;
  height: 100%;
`;

const AlbumBox = styled.View`
  width: 95%;
  height: 65%;
  margin-left: 9px;
  margin-right: 9px;
`;

const Artist = styled.Text`
  position: absolute;
  top: 70%;
  font-size: 18px;
  background-color: black;
  opacity: 0.7;
  width: 23%;
  color: white;
  margin-left: 3%;
`;

const Song = styled.Text`
  position: absolute;
  top: 83%;
  font-size: 18px;
  background-color: black;
  width: 30%;
  margin-left: 3%;

  color: white;
`;

const Tag = styled.Text`
  position: absolute;
  top: 105%;
  font-size: 12px;
  width: 30%;
  margin-left: 2%;

  color: ${theme.gray};
`;

const Duration = styled.Text`
  position: absolute;
  top: 105%;
  font-size: 12px;
  width: 30%;
  margin-left: 92%;
  color: ${theme.gray};
`;

const BottomContainer = styled.View`
  position: absolute;
  top: 26%;
  border-bottom-width: 0.6px;
  border-bottom-color: ${theme.lightGrayB};
  width: 100%;
  height: 50%;
`;

const BottomColor = styled.View`
  margin-top: 15%;
  width: 100%;
  height: 10px;
  background-color: ${theme.lightGrayB};
`;

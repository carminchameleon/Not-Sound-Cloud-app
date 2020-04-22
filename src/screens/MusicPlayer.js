import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  BackHandler
} from "react-native";
import { theme, flexCenter, ScrollView } from "../components/theme";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Audio, Video } from "expo-av";
import SongData from "../../Public/Data/SongData";

function PlayerScreen() {
  const barNum = 270;
  const [wave, setWave] = useState();
  const [play, setPlay] = useState(false);
  const [position, setPosition] = useState(0);
  const [fill, setFill] = useState(0);
  const [SongInfo, getSongInfo] = useState();

  // window.setTimeout(() => {
  //   setPosition(position - 1);
  //   setFill(fill + 1);
  // }, 1000);

  //10.58.3.91:8000/song/play/7

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://10.58.3.91:8000/song/play/7`);
      console.log(result);
      setData(result.data);
    };
    console.log(fetchData());

    fetchData();
  }, []);

  console.log("check", SongInfo);
  return (
    <TouchZone>
      <Container>
        <WaveContainer style={{ marginLeft: position }}>
          <CoverPicture source={require("../assets/images/cover.jpg")} />
          <WaveBox>
            <TopWaveBox>
              {wave.map(bar => {
                return (
                  <Top
                    style={{
                      height: bar + 20,
                      alignSelf: "flex-end"
                    }}
                  ></Top>
                );
              })}
            </TopWaveBox>
            <BotWaveBox>
              {wave.map(bar => {
                return <Bottom style={{ height: bar + 4 }}></Bottom>;
              })}
            </BotWaveBox>
          </WaveBox>
          {/* 덮이는 부분 */}
          <WaveBox>
            <CoverOutLayer style={{ width: fill * 2 }}>
              <TopWaveBox>
                {wave.map(bar => {
                  return (
                    <Top
                      style={{
                        height: bar + 20,
                        alignSelf: "flex-end",
                        backgroundColor: `${theme.orange}`
                      }}
                    ></Top>
                  );
                })}
              </TopWaveBox>
              <BotWaveBox>
                {wave.map(bar => {
                  return (
                    <Bottom
                      style={{
                        height: bar + 4,
                        backgroundColor: `${theme.orange}`
                      }}
                    ></Bottom>
                  );
                })}
              </BotWaveBox>
            </CoverOutLayer>
          </WaveBox>
        </WaveContainer>
        <HeaderContainer>
          <Artist>Lauv</Artist>
          <SongTitle>I'm so tired</SongTitle>
          <TopIconBox>
            <CastBox>
              <Feather name="cast" size={24} color="white" />
            </CastBox>
            <DownBox>
              <FontAwesome name="angle-down" size={35} color="white" />
            </DownBox>
          </TopIconBox>
          <Time>{position}</Time>
          <PlayButton onPress={() => _playMusic()}></PlayButton>
        </HeaderContainer>
      </Container>
    </TouchZone>
  );
}

export default PlayerScreen;

const TouchZone = styled.TouchableWithoutFeedback`
  flex: 1;
  position: relative;
`;

const Container = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  margin-left: 6%;
`;

const ArtistBox = styled.View``;
const Artist = styled.Text`
  margin-top: 18%;
  font-size: 16;
  padding: 0%;
  color: ${theme.HeaderLine};
  text-align: center;
  background-color: black;
  width: 14%;
`;

const SongTitle = styled.Text`
  margin-top: 4px;
  font-size: 24px;
  color: ${theme.lightGrayA};
  text-align: center;
  background-color: black;
  width: 30%;
`;

const TopIconBox = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18%;
  margin-left: 75%;
  width: 10%;
  height: 50%;
`;

const CastBox = styled.View`
  width: 30px;
  height: 30px;
`;

const DownBox = styled.View`
  position: absolute;
  left: 60%;
  top: -4px;
  width: 30px;
  height: 30px;
  justify-content: center;
`;

// 커버, 웨이브 들어갈 부분
const WaveContainer = styled.View`
  width: 900px;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: rgb(7, 68, 88);
`;

const CoverPicture = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

const WaveBox = styled.View`
  position: absolute;
  top: 60%;
  width: 900px;
  margin-left: 23%;
  height: 30%;
  display: flex;
  /* border: 1px solid blue; */
`;

const TopWaveBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Top = styled.View`
  width: 2px;
  margin: 1px;
  height: 10px;
  background-color: white;
`;

const BotWaveBox = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Bottom = styled.View`
  width: 2px;
  margin: 1px;
  height: 10px;
  background-color: white;
  opacity: 0.6;
`;

const Time = styled.Text`
  position: absolute;
  top: 200px;
  font-size: 19px;
  color: white;
`;

const CoverOutLayer = styled.View`
  border: 1px solid blue;
  width: 0px;
  height: 100%;
  overflow: hidden;
`;

const PlayButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100px;
  height: 30px;
  background-color: beige;
`;

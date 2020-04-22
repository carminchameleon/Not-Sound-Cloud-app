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
import SongData from "../../Public/Data/SongData";
import PlatData from "../../Public/Data/PlayData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import React, { Component } from "react";

export class PlayerScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: [],
      position: 0,
      wave: [],
      fill: 0,
      time: 0,
      like: false
    };
  }

  componentDidMount() {
    this.fetchData();
    this.MovePosition();
  }

  fetchData = () => {
    fetch(`http://10.58.6.120:8000/song/play/${this.props.songId}`)
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          dataSource: responseJson.song[0],
          wave: responseJson.song[0].wave_data
        })
      );
  };

  setLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  MovePosition = () => {
    const MoveScreen = setInterval(() => {
      this.setState(
        {
          position: this.state.position - 1,
          fill: this.state.fill + 0.5,
          time: this.state.time + 1
        },
        () => {
          if (this.state.time > 1080) {
            clearInterval(MoveScreen);
          }
        }
      );
    }, 100);
  };

  render() {
    // console.log(this.state.dataSource);'
    console.log("노래 확인해보자", this.props.songId);
    // console.log("노래 데이터 확인", PlayData.song[0]);
    // console.log("노래 물결", PlayData.song[0].wave_data);

    const { wave, fill, position, like, dataSource } = this.state;
    console.log(this.props.setModalVisible);
    return (
      <TouchZone
        onPress={() => {
          this.props.setModalVisible(false);
        }}
      >
        <Container>
          <WaveContainer style={{ marginLeft: position }}>
            <CoverPicture source={{ uri: `${dataSource.big_img_url}` }} />
            <WaveBox>
              <TopWaveBox>
                {wave.map(bar => {
                  return (
                    <Top
                      style={{
                        height: bar + 6,
                        alignSelf: "flex-end"
                      }}
                    ></Top>
                  );
                })}
              </TopWaveBox>
              <BotWaveBox>
                {wave.map(bar => {
                  return <Bottom style={{ height: bar + 1 }}></Bottom>;
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
                          height: bar + 6,
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
                          height: bar + 1,
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
            <Artist>{dataSource.artist_name}</Artist>
            <SongTitle>{dataSource.song_name}</SongTitle>
            <TopIconBox>
              <CastBox>
                <Feather name="cast" size={24} color="white" />
              </CastBox>
              <DownBox>
                <FontAwesome name="angle-down" size={35} color="white" />
              </DownBox>
            </TopIconBox>
            <BotttomIconBox>
              <HeartBox onPress={() => this.setLike()}>
                {like ? (
                  <MaterialCommunityIcons
                    name="heart"
                    size={25}
                    color="white"
                  />
                ) : (
                  <MaterialCommunityIcons name="heart" size={25} color="#f50" />
                )}
                <HeartNum>322</HeartNum>
              </HeartBox>
              <ReplyBox>
                <MaterialIcons name="message" size={25} color="white" />
                <ReplyNum>17</ReplyNum>
              </ReplyBox>
              <HeartBox>
                <Entypo name="share-alternative" size={20} color="white" />
              </HeartBox>
              <HeartBox>
                <MaterialCommunityIcons
                  name="repeat-once"
                  size={25}
                  color="white"
                />
              </HeartBox>
              <HeartBox>
                <Feather name="more-horizontal" size={24} color="white" />
              </HeartBox>
            </BotttomIconBox>
          </HeaderContainer>
        </Container>
      </TouchZone>
    );
  }
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
`;

const SongTitle = styled.Text`
  margin-top: 4px;
  font-size: 24px;
  color: ${theme.lightGrayA};
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
  width: 1500px;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: rgb(7, 68, 88);
`;

const CoverPicture = styled.Image`
  width: 500px;
  height: 900px;
  opacity: 0.3;
`;

const WaveBox = styled.View`
  position: absolute;
  top: 60%;
  width: 1500px;
  margin-left: 15%;
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
  opacity: 0.3;
`;

const Time = styled.Text`
  position: absolute;
  top: 100px;
  font-size: 19px;
  color: white;
`;

const CoverOutLayer = styled.View`
  /* border: 1px solid blue; */
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

const BotttomIconBox = styled.View`
  width: 85%;
  height: 50px;
  margin-top: 177%;
  margin-left: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeartBox = styled.TouchableOpacity`
  width: 15%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReplyBox = styled.TouchableOpacity`
  width: 15%;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

const HeartNum = styled.Text`
  font-family: "InterstateRegular";
  font-size: 13px;
  color: white;
  margin-top: 16%;
`;

const ReplyNum = styled.Text`
  font-family: "InterstateRegular";
  font-size: 13px;
  color: white;
  margin-top: 16%;
  margin-left: 2px;
`;

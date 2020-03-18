import React, { useState } from "react";
import styled from "styled-components";

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image
} from "react-native";
import { theme, flexCenter, ScrollView } from "../components/theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SongData from "../../Public/Data/SongData";

function PlayerScreen() {
  const barNum = 270;
  const [wave, setWave] = useState(SongData);
  return (
    <Container>
      <Cover
        source={require("../assets/images/cover.jpg")}
        style={styles.cover}
      ></Cover>
      <Progress>
        <ScrollBox horizontal={true}>
          <WaveBox>
            <WaveScroll>
              <TopWaveWrapper>
                {wave.map(bar => {
                  return (
                    <Top
                      style={{
                        height: bar + 40,
                        alignSelf: "flex-end",
                        borderBottomColor: "red"
                      }}
                    />
                  );
                })}
              </TopWaveWrapper>
              <WaveWrapper>
                {wave.map(bar => {
                  return <Bottom style={{ height: bar + 20 }} />;
                })}
              </WaveWrapper>
            </WaveScroll>
          </WaveBox>
        </ScrollBox>
      </Progress>
    </Container>
  );
}

export default PlayerScreen;

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Cover = styled.Image``;

const Progress = styled.View`
  flex: 0.5;
`;

const WaveBox = styled.View``;
const WaveScroll = styled.ScrollView``;

const Scroll = styled.ScrollView``;

const ScrollBox = styled.ScrollView``;

const Box = styled.View`
  border: 1px solid white;
  position: absolute;
  left: 40%;
  top: 60%;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
`;

const WaveWrapper = styled.View`
  border: 1px solid white;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
`;

const TopWaveWrapper = styled.View`
  border: 1px solid white;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
`;

const Top = styled.View`
  width: 5px;
  height: 40px;
  margin: 1px;
  background-color: yellow;
`;

const Bottom = styled.View`
  width: 5px;
  height: 40px;
  margin: 1px;
  background-color: yellow;
`;

const styles = StyleSheet.create({
  cover: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null
  }
});

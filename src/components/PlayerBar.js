import React, { useState } from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme, flexCenter, ScrollView } from "../components/theme";

function PlayerBar() {
  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);

  return (
    <BarContainer>
      <PlayWrapper onPress={() => setPlay(!play)}>
        <PlayBox>
          {!play ? (
            <IconBox>
              <MaterialCommunityIcons name="pause" size="25px" color="white" />
            </IconBox>
          ) : (
            <PlayButton source={require("../assets/images/play.png")} />
          )}
        </PlayBox>
      </PlayWrapper>
      <TitleWrapper>
        <TitleBox>
          <Song>I'm so tired </Song>
          <Artist>Lauv</Artist>
        </TitleBox>
      </TitleWrapper>
      <HeartWrapper onPress={() => setLike(!like)}>
        <HeartBox>
          {like ? (
            <MaterialCommunityIcons name="heart" size="20px" color="#f50" />
          ) : (
            <MaterialCommunityIcons name="heart" size="20px" color="white" />
          )}
        </HeartBox>
      </HeartWrapper>
    </BarContainer>
  );
}

export default PlayerBar;

const BarContainer = styled.View`
  position: absolute;
  bottom: 10%;
  width: 100%;
  height: 45px;
  background-color: rgb(7, 68, 88);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const PlayWrapper = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  display: flex;
`;

const PlayBox = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const PlayButton = styled.Image`
  margin-left: 33%;
  width: 20px;
  height: 20px;
`;

const IconBox = styled.View`
  position: absolute;
  left: 25%;
  top: 25%;
`;

const TitleWrapper = styled.TouchableOpacity`
  flex: 7;
`;
const TitleBox = styled.View`
  display: flex;
  justify-content: center;
  flex: 7;
`;
const Song = styled.Text`
  padding-top: 2%;
  color: white;
  font-size: 15px;
  text-align: center;
  font-family: "InterstateRegular";
`;
const Artist = styled.Text`
  text-align: center;
  font-size: 11px;
  font-family: "InterstateRegular";
  color: ${theme.gray};
`;

const HeartWrapper = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 100%;
  ${flexCenter}
  position:relative;
`;
const HeartBox = styled.View`
  position: absolute;
  left: 25%;
  top: 25%;
`;

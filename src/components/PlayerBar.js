import React, { useState } from "react";
import styled from "styled-components";
import { View, TouchableWithoutFeedback, Text } from "react-native";

function PlayerBar() {
  return (
    <BarContainer>
      <PlayWrapper>
        <PlayBox></PlayBox>
      </PlayWrapper>
      <TitleWrapper>
        <TitleBox>
          <Song>I'm so tired </Song>
          <Artist>Lauv</Artist>
        </TitleBox>
      </TitleWrapper>
      <HeartWrapper>
        <HeartBox></HeartBox>
      </HeartWrapper>
    </BarContainer>
  );
}

export default PlayerBar;

const BarContainer = styled.View``;
const PlayWrapper = styled.TouchableWithoutFeedback``;
const PlayBox = styled.View``;
const TitleWrapper = styled.TouchableWithoutFeedback``;
const TitleBox = styled.View``;
const HeartWrapper = styled.TouchableWithoutFeedback``;
const HeartBox = styled.View``;
const Song = styled.Text``;
const Artist = styled.Text``;

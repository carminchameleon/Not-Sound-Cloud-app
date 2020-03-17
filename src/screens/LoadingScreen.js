import React, { Component } from "react";
import styled from "styled-components";
import { View, TouchableWithoutFeedback, StatusBar } from "react-native";

export class LoadingScreen extends Component {
  render() {
    return (
      <Container>
        <Loading source={require("../assets/images/loading.png")}></Loading>
        <Cloud
          resizeMode="contain"
          source={require("../assets/images/cloud.png")}
        ></Cloud>
      </Container>
    );
  }
}

export default LoadingScreen;

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

const Loading = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Cloud = styled.Image`
  margin-top: 84%;
  width: 33%;
  height: 10%;
`;

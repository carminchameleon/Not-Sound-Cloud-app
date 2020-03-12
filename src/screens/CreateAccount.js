import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  modal,
  Alert
} from "react-native";
import styled from "styled-components";

export class CreateAccount extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <HeaderContainer>
            <CancelContainer></CancelContainer>
            <TitleBox></TitleBox>
            <NextBox></NextBox>
          </HeaderContainer>
          <BodyContainer></BodyContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default CreateAccount;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const Container = styled.View`
  background-color: rgb(255, 255, 255);
  height: 93.5%;
  width: 100%;
  border-radius: 6px;
  display: flex;
`;

const HeaderContainer = styled.View`
  height: 6.5%;
  width: 100%;
  background-color: blue;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const CancelContainer = styled.View`
  flex: 1;
  border: 1px solid yellow;
`;

const TitleBox = styled.View`
  flex: 4;
  background-color: green;
`;

const NextBox = styled.View`
  flex: 1;
  background-color: blue;
`;

const BodyContainer = styled.View`
  height: 93.5%;
  width: 100%;
  background-color: yellow;
`;

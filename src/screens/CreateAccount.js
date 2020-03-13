import React, { Component } from "react";
import SocialSignup from "../screens/SocialSignup";
import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  modal,
  Alert,
  TextInput,
  TouchableNativeFeedbackBase
} from "react-native";
import styled from "styled-components";
import { theme, flexCenter } from "../components/theme";

function isEmail(asValue) {
  var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

const check_email = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      mailFocus: false,
      mail: "",
      mailWarming: true
    };
  }

  handlePosition = focus => {
    this.setState({ mailFocus: focus });
  };

  handleEmail = email => {
    console.log(email);
    this.setState({ mail: email });
    if (isEmail(email)) {
      console.log("checked email");
      this.setState({ mailWarming: false }); // 메일을 false로
    }
  };

  render() {
    const { theme, flexCenter } = { theme, flexCenter };

    return (
      <Wrapper>
        <Container>
          <HeaderContainer>
            <CancelContainer>
              <CancelBox onPress={() => this.props.setModalVisible(false)}>
                <Cancel>Cancel</Cancel>
              </CancelBox>
            </CancelContainer>
            <TitleBox>
              <Title>Create account</Title>
            </TitleBox>
            <NextContainer>
              <NextBox>
                <Next>Next</Next>
              </NextBox>
            </NextContainer>
          </HeaderContainer>
          <BodyContainer>
            {this.state.mailFocus ? <></> : <SocialSignup />}
            <InputContainer>
              <EmailContainer>
                <InputTitleBox>
                  <InputTitle>EMAIL</InputTitle>
                </InputTitleBox>
                <InputContentsBox>
                  <EmailInput
                    onFocus={() => {
                      this.handlePosition(true);
                    }}
                    onChangeText={val => {
                      this.handleEmail(val);
                    }}
                    placeholder="mail@example.com"
                    returnKeyType={"done"}
                    autoCorrect={false}
                  ></EmailInput>
                  {this.state.mailWarming ? (
                    <Warming>Please enter a valid email address</Warming>
                  ) : (
                    <></>
                  )}
                </InputContentsBox>
              </EmailContainer>
              <PWContainer>
                <InputTitleBox>
                  <InputTitle>PASSWORD</InputTitle>
                </InputTitleBox>
                <InputContentsBox>
                  <PWInput
                    onFocus={() => {
                      this.handlePosition(true);
                    }}
                    onChangeText={() => {}}
                    returnKeyType={"done"}
                    autoCorrect={false}
                    placeholder="Min 6 characters"
                  ></PWInput>
                  <Warming>Please enter a valid password</Warming>
                </InputContentsBox>
              </PWContainer>
            </InputContainer>
          </BodyContainer>
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
  height: 93%;
  width: 100%;
  border-radius: 6px;
  display: flex;
`;

const HeaderContainer = styled.View`
  height: 7%;
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
  ${flexCenter}
`;

const CancelBox = styled.TouchableWithoutFeedback`
  width: 100%;
  height: 100%;
`;

const Cancel = styled.Text`
  font-size: 17px;
  font-family: "InterstateRegular";
  text-align: center;
  color: ${theme.lightGrayB};
`;

const TitleBox = styled.View`
  flex: 3;
  background-color: ${theme.white};
  ${flexCenter}
`;
const Title = styled.Text`
  font-family: "InterstateRegular";
  font-size: 17px;
  text-align: center;
  color: ${theme.chacoal};
  background-color: ${theme.white};
`;

const NextContainer = styled.View`
  flex: 1;
  ${flexCenter}
`;

const NextBox = styled.TouchableWithoutFeedback``;

const Next = styled.Text`
  font-size: 17px;
  font-family: "InterstateRegular";
  color: ${theme.lightGrayB};
  text-align: center;
`;
const BodyContainer = styled.View`
  height: 93.5%;
  width: 100%;
  background-color: ${theme.lightGrayA};
  border-top-color: ${theme.HeaderLine};
  border-top-width: 0.3px;
`;

const InputContainer = styled.View`
  margin-top: 4%;
  width: 100%;
  height: 18%;
  display: flex;
  margin-bottom: 0%;
`;

const EmailContainer = styled.View`
  background-color: white;
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.4px;
  border-bottom-color: ${theme.lightGrayA};
  border-bottom-width: 0.4px;
`;

const PasswordContainer = styled.View`
  background-color: white;
  height: 55%;
`;

const InputTitleBox = styled.View`
  width: 25%;
  height: 100%;
  justify-content: center;
`;
const InputContentsBox = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
`;

const InputTitle = styled.Text`
  margin-left: 15%;
  margin-top: 3%;
  font-size: 13px;
  color: ${theme.HeaderLine};
  font-family: "InterstateRegular";
`;

const EmailInput = styled.TextInput`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "InterstateRegular";
  color: ${theme.chacoal};
`;

const Warming = styled.Text`
  position: absolute;
  top: 65%;
  color: red;
  font-size: 10.5px;
`;

const PWContainer = styled.View`
  background-color: white;
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.4px;
  border-bottom-color: ${theme.lightGrayA};
  border-bottom-width: 0.4px;
`;
const PWInput = styled.TextInput`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "InterstateRegular";
  color: ${theme.chacoal};
`;

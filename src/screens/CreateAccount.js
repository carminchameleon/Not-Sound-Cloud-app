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
  Modal,
  Alert,
  TextInput,
  TouchableNativeFeedbackBase
} from "react-native";

import styled from "styled-components";
import { theme, flexCenter } from "../components/theme";

function checkEmail(address) {
  var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  if (exptext.test(address)) {
    // 이메일 형식이 맞을 경우
    return true;
  } else {
    return false;
  }
}

function checkPassword(PW) {
  if (PW.length > 5) {
    return true;
  } else {
    return false;
  }
}

export class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      focused: false,
      mail: "",
      validEmail: false,
      showEmailWarning: true,
      password: "",
      validPassword: false,
      showPasswordWarning: true
    };
  }
  // 클릭했을 때, 입력 창이 올라오게
  handlePosition = focus => {
    this.setState({ focused: focus });
  };

  ///내가 친 이메일과 그 이메일이 적합한지를 저장하는 함수
  handleEmail = email => {
    this.setState({ mail: email, validEmail: checkEmail(email) });
  };

  checkMailWarning = () => {
    if (this.state.validEmail) {
      this.setState({ showEmailWarning: true });
    } else {
      this.setState({ showEmailWarning: false });
    }
  };

  ///내가 친 이메일과 그 이메일이 적합한지를 저장하는 함수
  handlePassword = PW => {
    this.setState({ password: PW, validPassword: checkPassword(PW) });
  };

  checkPasswordWarning = () => {
    if (this.state.validPassword) {
      this.setState({ showPasswordWarning: true });
    } else {
      this.setState({ showPasswordWarning: false });
    }
  };

  render() {
    const { theme, flexCenter } = { theme, flexCenter };
    const { setModalVisible } = this.props;
    const {
      focused,
      validEmail,
      showEmailWarning,
      showPasswordWarning,
      validPassword
    } = this.state;
    return (
      <Wrapper>
        <Container>
          <HeaderContainer>
            <CancelContainer>
              <CancelBox onPress={() => setModalVisible(false)}>
                <Cancel>Cancel</Cancel>
              </CancelBox>
            </CancelContainer>
            <TitleBox>
              <Title>Create account</Title>
            </TitleBox>
            <NextContainer>
              <NextBox>
                {validEmail && validPassword ? (
                  <GoNext>Next</GoNext>
                ) : (
                  <Next>Next</Next>
                )}
              </NextBox>
            </NextContainer>
          </HeaderContainer>
          <BodyContainer>
            {focused ? <></> : <SocialSignup />}
            <InputContainer>
              <EmailContainer>
                <InputTitleBox>
                  <InputTitle>EMAIL</InputTitle>
                </InputTitleBox>
                <InputContentsBox>
                  <EmailInput
                    onFocus={() => {
                      this.handlePosition(true);
                      this.setState({ showEmailWarning: true });
                    }}
                    onBlur={() => {
                      this.checkMailWarning();
                    }}
                    onChangeText={val => {
                      this.handleEmail(val);
                    }}
                    placeholder="mail@example.com"
                    returnKeyType={"done"}
                    autoCorrect={false}
                  ></EmailInput>
                  {showEmailWarning ? (
                    <></>
                  ) : (
                    <Warning>Please enter a valid email address</Warning>
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
                      this.setState({ showPasswordWarning: true });
                    }}
                    onBlur={() => {
                      this.checkPasswordWarning();
                    }}
                    onChangeText={val => {
                      this.handlePassword(val);
                    }}
                    returnKeyType={"done"}
                    autoCorrect={false}
                    placeholder="Min 6 characters"
                  ></PWInput>
                  {showPasswordWarning ? (
                    <></>
                  ) : (
                    <Warning>Please enter a valid password</Warning>
                  )}
                </InputContentsBox>
              </PWContainer>
            </InputContainer>
            <PolicyContainer>
              <PolicyBox>
                <Policy>
                  We may use your email and devices for updates and tips on
                  SoundCloud's products and services, and for activities
                  notifications. You can unsubscribe for free at any time in
                  your notification settings.
                </Policy>
                <Policy>
                  We may use information you provide us in order to show you
                  targeted ads as describe in our Privacy Policy
                </Policy>
              </PolicyBox>
            </PolicyContainer>
          </BodyContainer>
        </Container>
        <Modal visible={this.state.secondaryModalVisibility}>
          <CreateInfo />
        </Modal>
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
  color: ${theme.HeaderLine};
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

const GoNext = styled.Text`
  font-size: 17px;
  font-family: "InterstateRegular";
  color: ${theme.HeaderLine};
  text-align: center;
`;

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

const Warning = styled.Text`
  position: absolute;
  top: 65%;
  color: rgb(202, 64, 58);
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

const PolicyContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3%;
`;

const Policy = styled.Text`
  width: 100%;
  font-size: 11;
  text-align: center;
  color: ${theme.gray};
  padding: 2% 3%;
  font-family: "InterstateRegular";
`;

const PolicyBox = styled.View`
  width: 100%;
  height: 33%;
`;

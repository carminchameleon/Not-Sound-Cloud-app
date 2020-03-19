import React, { useState } from "react";
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
  TouchableNativeFeedbackBase,
  Keyboard,
  AsyncStorage
} from "react-native";

import styled from "styled-components";
import { theme, flexCenter } from "../components/theme";

const url = "http://10.58.1.163:8000/user/sign-in";

function CreateAccount({ setLoginVisible }) {
  const [focus, setFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailForm, checkEmail] = useState(false);
  const [passwordForm, checkPassword] = useState(false);

  const onChangeEmail = email => {
    setEmail(email);
    if (email.length > 1) {
      checkEmail(true);
    }
  };
  const onChangePassword = PW => {
    setPassword(PW);
    if (PW.length > 1) {
      checkPassword(true);
    }
  };

  // const loginsubmit = dispatch => {
  //   const data = {
  //     email: email,
  //     password: password
  //   };
  //   return async data => {
  //     try {
  //       const response = await url.post(JSON.stringify(data));
  //       await AsyncStorage.setItem("token", response.user.token);
  //     } catch (err) {
  //       dispatch({
  //         type: "add_error",
  //         payload: "Something wrong with signup"
  //       });
  //     }
  //   };
  // };

  const handleSubmit = e => {
    const data = {
      email: email,
      password: password
    };
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 200) {
          alert("login Okay");
          return res.json();
        } else if (res.status === 500) {
          alert("Wrong from backend");
        } else if (res.status === 401) {
          alert("check your Password");
        } else {
          alert("wrong from frontend");
        }
      })
      .then(response => AsyncStorage.setItem("token", response.user.token))
      .then(
        AsyncStorage.getItem("token").then(item => {
          console.log("token", item);
        })
      );
  };

  const storeToken = async token => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      alert("wrong with saving");
    }
  };
  return (
    <TouchZone
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Wrapper>
        <Container>
          <HeaderContainer>
            <CancelContainer>
              <CancelBox onPress={() => setLoginVisible(false)}>
                <Cancel>Cancel</Cancel>
              </CancelBox>
            </CancelContainer>
            <TitleBox>
              <Title>Login</Title>
            </TitleBox>
            <DoneContainer>
              {emailForm && passwordForm ? (
                <GoDone onPress={() => handleSubmit()}>Done</GoDone>
              ) : (
                <Done>Done</Done>
              )}
            </DoneContainer>
          </HeaderContainer>
          <BodyContainer>
            {focus ? <></> : <SocialSignup />}
            <InputContainer>
              <EmailContainer>
                <InputTitleBox>
                  <InputTitle>EMAIL</InputTitle>
                </InputTitleBox>
                <InputContentsBox>
                  <EmailInput
                    onFocus={() => setFocus(!focus)}
                    placeholder="Your email address"
                    returnKeyType={"done"}
                    autoCorrect={false}
                    onChangeText={val => {
                      onChangeEmail(val);
                    }}
                  ></EmailInput>
                </InputContentsBox>
              </EmailContainer>
              <PWContainer>
                <InputTitleBox>
                  <InputTitle>PASSWORD</InputTitle>
                </InputTitleBox>
                <InputContentsBox>
                  <PWInput
                    onFocus={() => setFocus(!focus)}
                    placeholder="Your password"
                    autoCorrect={false}
                    onChangeText={val => {
                      onChangePassword(val);
                    }}
                  ></PWInput>
                </InputContentsBox>
              </PWContainer>
            </InputContainer>
            <HelpBox>
              <HelpWrapper
                onPress={() => {
                  alert("🤔");
                }}
              >
                <Help>Forgot Your password?</Help>
              </HelpWrapper>
            </HelpBox>
          </BodyContainer>
        </Container>
      </Wrapper>
    </TouchZone>
  );
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

const DoneContainer = styled.View`
  flex: 1;
  ${flexCenter}
`;

const DoneBox = styled.TouchableWithoutFeedback``;

const GoDone = styled.Text`
  font-size: 17px;
  font-family: "InterstateRegular";
  color: ${theme.deepOrange};
  text-align: center;
`;

const Done = styled.Text`
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

const HelpBox = styled.View`
  margin-top: 3%;
  width: 100%;
  height: 4%;
`;

const Help = styled.Text`
  text-align: center;
  font-size: 10px;
  font-family: "InterstateRegular";
  color: ${theme.chacoal};
`;

const HelpWrapper = styled.TouchableOpacity``;

const TouchZone = styled.TouchableWithoutFeedback``;

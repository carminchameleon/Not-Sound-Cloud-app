import React, { Component } from "react";
import styled from "styled-components";
import { theme, flexCenter } from "../components/theme";
import { NavigationContainer } from "@react-navigation/native";
import {
  Picker,
  TouchableWithoutFeedback,
  Keyboard,
  modal,
  AsyncStorage
} from "react-native";
import Main from "../routes/Main";

const url = "http://10.58.1.163:8000/user/sign-in/google";
export class CreateInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      gender: "",
      validAge: true,
      showOption: false,
      genderSelected: false
    };
  }
  checkAge = () => {
    if (this.state.age > 1) {
      this.setState({ validAge: true });
    } else {
      this.setState({ validAge: false });
    }
  };
  handleAge = Age => {
    this.setState({
      age: Number(Age)
    });
  };

  handleSubmit = e => {
    const data = {
      email: this.props.email,
      password: this.props.password,
      gender: this.state.gender,
      age: this.state.age
    };
    console.log("datacheck", data);
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
          return res.json();
        } else if (res.status === 500) {
          alert("Wrong from backend");
        } else {
          alert("wrong from frontend");
        }
      })
      .then(res => console.log(res.token));
  };

  render() {
    console.log(this.props.navigation);
    const { theme, flexCenter } = { theme, flexCenter };
    const { setInfoVisible, navigation } = this.props;
    const { validAge, genderSelected } = this.state;
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
                <CancelBox onPress={() => setInfoVisible(false)}>
                  <Cancel>Cancel</Cancel>
                </CancelBox>
              </CancelContainer>
              <TitleBox>
                <Title>Create account</Title>
              </TitleBox>
              <DoneContainer>
                <DoneBox>
                  {validAge && genderSelected ? (
                    <RealDone onPress={() => this.handleSubmit()}>
                      Done
                    </RealDone>
                  ) : (
                    <Done
                      onPress={() => {
                        navigation.push("Main");
                      }}
                    >
                      Done
                    </Done>
                  )}
                </DoneBox>
              </DoneContainer>
            </HeaderContainer>
            <BodyContainer>
              <InputContainer>
                <AgeContainer>
                  <InputTitleBox>
                    <InputTitle>AGE</InputTitle>
                  </InputTitleBox>
                  <InputContentsBox>
                    <AgeInput
                      onBlur={() => {
                        this.checkAge();
                      }}
                      onChangeText={val => {
                        this.handleAge(val);
                        this.setState({ validAge: true });
                      }}
                      keyboardType="number-pad"
                      placeholder="Enter Your age (Required)"
                    ></AgeInput>
                    {this.state.validAge ? (
                      <></>
                    ) : (
                      <Warning>Please tell us your age</Warning>
                    )}
                  </InputContentsBox>
                </AgeContainer>
                <GenderContainer>
                  <InputTitleBox>
                    <InputTitle>GENDER</InputTitle>
                  </InputTitleBox>
                  <InputContentsBox>
                    <GenderInput
                      onFocus={() => {
                        this.setState({ showOption: true });
                        Keyboard.dismiss();
                      }}
                      placeholder="Gender (Required)"
                      editable={true}
                    >
                      {this.state.gender}
                    </GenderInput>
                  </InputContentsBox>
                </GenderContainer>
              </InputContainer>
              {this.state.showOption ? (
                <GenderPicker
                  selectedValue={this.state.gender}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ gender: itemValue, genderSelected: true })
                  }
                >
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Custom" value="Custom" />
                  <Picker.Item
                    label="Prefer not to say"
                    value="Prefer not to say"
                  />
                </GenderPicker>
              ) : (
                <></>
              )}
            </BodyContainer>
          </Container>
        </Wrapper>
      </TouchZone>
    );
  }
}

export default CreateInfo;

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
  color: ${theme.HeaderLine};
  text-align: center;
`;

const Done = styled.Text`
  font-size: 17px;
  font-family: "InterstateRegular";
  color: ${theme.lightGrayB};
  text-align: center;
`;

const RealDone = styled.Text`
  font-size: 17px;
  font-family: "InterstateRegular";
  color: ${theme.deepOrange};
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
  height: 20%;
  display: flex;
  margin-bottom: 0%;
`;

const AgeContainer = styled.View`
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

const AgeInput = styled.TextInput`
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

const GenderContainer = styled.View`
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
const GenderInput = styled.TextInput`
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

const GenderPicker = styled.Picker`
  position: absolute;
  top: 68%;
  width: 100%;
  background-color: ${theme.white};
`;
const TouchZone = styled.TouchableWithoutFeedback``;

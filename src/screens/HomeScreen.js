import React, { useState } from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image
} from "react-native";
import { theme, flexCenter, ScrollView } from "../components/theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HeaderBar from "../components/HeaderBar";
import HomeData from "../../Public/Data/Homedata";
import PlayerBar from "../components/PlayerBar";

import {
  HeaderBackground,
  GestureHandlerRefContext
} from "react-navigation-stack";

function HomeScreen() {
  const [songData, setData] = useState(HomeData.song);
  console.log(HomeData.song[0]);
  return (
    <Wrapper>
      <HeaderBar />
      <Body>
        <Container>
          <TagContainer>
            <TagName>Chill</TagName>
            <TagComment>
              Popular playlists from the SoundCloud community
            </TagComment>
            <SongContainer>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={songData[0].chill}
                renderItem={({ item }) => (
                  <SongBox>
                    <CoverImage source={{ url: `${item.small_img_url}` }} />
                    <SongInfo>
                      <SongTitle numberOfLines={1}>{item.song_name}</SongTitle>
                    </SongInfo>
                    <Artist>{item.artist_name}</Artist>
                  </SongBox>
                )}
              />
            </SongContainer>
          </TagContainer>
          <TagContainer>
            <TagName>Party</TagName>
            <TagComment>
              Popular playlists from the SoundCloud community
            </TagComment>
            <SongContainer>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={songData[1].party}
                renderItem={({ item }) => (
                  <SongBox>
                    <CoverImage source={{ url: `${item.small_img_url}` }} />
                    <SongInfo>
                      <SongTitle numberOfLines={1}>{item.song_name}</SongTitle>
                    </SongInfo>
                    <Artist>{item.artist_name}</Artist>
                  </SongBox>
                )}
              />
            </SongContainer>
          </TagContainer>
          <TagContainer>
            <TagName>Work out</TagName>
            <TagComment>
              Popular playlists from the SoundCloud community
            </TagComment>
            <SongContainer>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={songData[2].wecode}
                renderItem={({ item }) => (
                  <SongBox>
                    <CoverImage source={{ url: `${item.small_img_url}` }} />
                    <SongInfo>
                      <SongTitle numberOfLines={1}>{item.song_name}</SongTitle>
                    </SongInfo>
                    <Artist>{item.artist_name}</Artist>
                  </SongBox>
                )}
              />
            </SongContainer>
          </TagContainer>
          <TagContainer>
            <TagName>Relax</TagName>
            <TagComment>
              Popular playlists from the SoundCloud community
            </TagComment>
            <SongContainer>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={songData[3].wework}
                renderItem={({ item }) => (
                  <SongBox>
                    <CoverImage source={{ url: `${item.small_img_url}` }} />
                    <SongInfo>
                      <SongTitle numberOfLines={1}>{item.song_name}</SongTitle>
                    </SongInfo>
                    <Artist>{item.artist_name}</Artist>
                  </SongBox>
                )}
              />
            </SongContainer>
          </TagContainer>
        </Container>
      </Body>
    </Wrapper>
  );
}

export default HomeScreen;

const Wrapper = styled.View`
  flex: 1;
`;

const Body = styled.ScrollView`
  flex: 1;
`;

const Container = styled.View`
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.8px;
  margin-top: 3%;
  flex: 1;
  background-color: transparent;
`;

const TagContainer = styled.View`
  background-color: white;
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.6px;
  border-bottom-color: ${theme.lightGrayB};
  border-bottom-width: 0.6px;
  padding-left: 4%;
  margin-bottom: 3%;
`;

const TagName = styled.Text`
  font-size: 25px;
  padding-top: 6%;
  font-family: "InterstateRegular";
  color: ${theme.MainFontChacole};
`;

const TagComment = styled.Text`
  margin: 2% 0;
  margin-bottom: 3%;
  font-size: 13.5px;
  font-family: "InterstateRegular";
  color: ${theme.MainFontGray};
`;

const SongContainer = styled.View`
  display: flex;
  justify-content: space-between;
`;

const CoverImage = styled.Image`
  width: 130px;
  height: 130px;
`;

const SongTitle = styled.Text`
  padding-top: 4%;
  margin-top: 15px;
  font-family: "InterstateRegular";
  font-size: 15px;
  color: ${theme.MainFontChacole};
`;

const SongBox = styled.View`
  padding-right: 2%;
`;

const SongInfo = styled.View`
  width: 120px;
`;
const Artist = styled.Text`
  margin-top: 2px;
  margin-bottom: 13px;
  font-size: 13px;
  color: ${theme.MainFontGray};
  overflow: hidden;
`;

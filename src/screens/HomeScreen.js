import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import { theme, flexCenter, ScrollView } from "../components/theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HeaderBar from "../components/HeaderBar";
import HomeData from "../../Public/Data/Homedata";
import PlayerBar from "./PlayerBar";
import {
  HeaderBackground,
  GestureHandlerRefContext
} from "react-navigation-stack";
import { AuthContext } from "../routes/Context";
import { useSafeArea } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  const [songData, setSongData] = useState([]);
  const [loading, isLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [artist, setArtist] = useState(null);
  const [song, setSong] = useState(null);
  const [songId, setSongId] = useState(null);
  const [currentSong, setCurrentSong] = useState();
  useEffect(() => {
    fetch("http://10.58.3.91:8000/song/home/1")
      .then(res => res.json())
      .then(res => setSongData(res.song));
  }, []);

  playSong = data => {
    const array = [data.song_name, data.song_id, data.artist_name];
    console.log("클릭 데이터 확인", data);
    setCurrentSong(array);
    setPlaying(true);
  };

  if (songData[1] !== undefined) {
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
                  data={songData[0].Chill}
                  renderItem={({ item }) => (
                    <TouchZone onPress={() => playSong(item)}>
                      <SongBox>
                        <CoverImage source={{ url: `${item.big_img_url}` }} />
                        <SongInfo>
                          <SongTitle numberOfLines={1}>
                            {item.song_name}
                          </SongTitle>
                        </SongInfo>
                        <Artist>{item.artist_name}</Artist>
                      </SongBox>
                    </TouchZone>
                  )}
                />
              </SongContainer>
            </TagContainer>
            <TagContainer>
              <TagName>WeWork</TagName>
              <TagComment>
                Popular playlists from the SoundCloud community
              </TagComment>
              <SongContainer>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={songData[1].WeWork}
                  renderItem={({ item }) => (
                    <TouchZone onPress={() => playSong(item)}>
                      <SongBox>
                        <CoverImage source={{ url: `${item.big_img_url}` }} />
                        <SongInfo>
                          <SongTitle numberOfLines={1}>
                            {item.song_name}
                          </SongTitle>
                        </SongInfo>
                        <Artist>{item.artist_name}</Artist>
                      </SongBox>
                    </TouchZone>
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
                  data={songData[2].GracefulRain}
                  renderItem={({ item }) => (
                    <TouchZone onPress={() => playSong(item)}>
                      <SongBox>
                        <CoverImage source={{ url: `${item.big_img_url}` }} />
                        <SongInfo>
                          <SongTitle numberOfLines={1}>
                            {item.song_name}
                          </SongTitle>
                        </SongInfo>
                        <Artist>{item.artist_name}</Artist>
                      </SongBox>
                    </TouchZone>
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
                  data={songData[3].WeWorkout}
                  renderItem={({ item }) => (
                    <TouchZone onPress={() => playSong(item)}>
                      <SongBox>
                        <CoverImage source={{ url: `${item.big_img_url}` }} />
                        <SongInfo>
                          <SongTitle numberOfLines={1}>
                            {item.song_name}
                          </SongTitle>
                        </SongInfo>
                        <Artist>{item.artist_name}</Artist>
                      </SongBox>
                    </TouchZone>
                  )}
                />
              </SongContainer>
            </TagContainer>
            <TagContainer>
              <TagName>Hot</TagName>
              <TagComment>
                Popular playlists from the SoundCloud community
              </TagComment>
              <SongContainer>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={songData[4].Wecode}
                  renderItem={({ item }) => (
                    <TouchZone onPress={() => isPlaying()}>
                      <SongBox>
                        <CoverImage source={{ url: `${item.big_img_url}` }} />
                        <SongInfo>
                          <SongTitle numberOfLines={1}>
                            {item.song_name}
                          </SongTitle>
                        </SongInfo>
                        <Artist>{item.artist_name}</Artist>
                      </SongBox>
                    </TouchZone>
                  )}
                />
              </SongContainer>
            </TagContainer>
          </Container>
        </Body>
        {playing ? <PlayerBar currentSong={currentSong} /> : null}
      </Wrapper>
    );
  } else {
    return <View></View>;
  }
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

const TouchZone = styled.TouchableWithoutFeedback``;

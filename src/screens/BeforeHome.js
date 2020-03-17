import React, { useState } from "react";
import styled from "styled-components";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image
} from "react-native";
import { theme, flexCenter } from "../components/theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HomeData from "../../Public/Data/Homedata";

function Songs(data) {
  return (
    <SongBox>
      <SongCover>
        <CoverImage source={{ url: `${data.small_img_url}` }}></CoverImage>
      </SongCover>
      <SongInfo>
        <SongTitle>{data.song_name}</SongTitle>
        <Artist>{data.artist_name}</Artist>
      </SongInfo>
    </SongBox>
  );
}

function HomeScreen() {
  const [songData, setData] = useState(HomeData.song[0]);
  console.log(songData);

  console.log("데이터 체크", songData.chill);
  return (
    <TouchZone>
      <Wrapper>
        <BodyContainer>
          {/* 태그 섹션 */}
          <TagContainer>
            <TagHeader>
              <TagName>Chill</TagName>
              <TagComment>
                Popular playlists from the SoundCloud community
              </TagComment>
            </TagHeader>
            <TagBody>
              <SongContainer>
                <FlatList
                  horizontal
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  legacyImplementation={false}
                  style={{ width: "100%", height: "100%" }}
                  data={songData.chill}
                  renderItem={({ item }) => (
                    <View>
                      <Text>{item.song_name}</Text>
                      <CoverImage
                        source={{ url: `${item.small_img_url}` }}
                      ></CoverImage>
                    </View>
                  )}
                />
              </SongContainer>
            </TagBody>
          </TagContainer>
          {/* 태그 섹션 */}
        </BodyContainer>
      </Wrapper>
    </TouchZone>
  );
}

export default HomeScreen;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${theme.lightGrayA};
  ${theme.flexCenter}
`;

const TouchZone = styled.TouchableWithoutFeedback``;

const BodyContainer = styled.View`
  width: 100%;
  height: 89.5%;
`;

const TagContainer = styled.View`
  margin-top: 15px;
  width: 100%;
  height: 40%;
  background-color: white;
  border-top-color: ${theme.lightGrayB};
  border-top-width: 0.8px;
  border-bottom-color: ${theme.lightGrayB};
  border-bottom-width: 0.8px;
  display: flex;
  padding: 4%;
`;
const TagHeader = styled.View`
  height: 30%;
  width: 100%;
`;
const TagName = styled.Text`
  margin-top: 4%;
  font-size: 25px;
  font-family: "InterstateRegular";
  color: ${theme.MainFontChacole};
`;
const TagComment = styled.Text`
  margin: 2% 0;
  font-size: 13.5px;
  font-family: "InterstateRegular";
  color: ${theme.MainFontGray};
`;

const TagBody = styled.View`
  flex: 5;
  width: 200%;
  margin-top: 3%;
  border: 1px solid yellow;
`;

const SongContainer = styled.TouchableWithoutFeedback`
  width: 100%;
  height: 100%;
`;

const SongBox = styled.View`
  width: 33%;
  height: 100%;
  border: 1px solid pink;
  margin-left: 3%;
  margin-right: 0%;
`;

const SongCover = styled.View`
  width: 100%;
  height: 82%;
`;

const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const SongInfo = styled.View`
  width: 100%;
  height: 30%;
  margin-top: 8%;
`;

const SongTitle = styled.Text`
  font-family: "InterstateRegular";
  font-size: 15px;
  color: ${theme.MainFontChacole};
`;

const Artist = styled.Text`
  font-size: 13px;
  color: ${theme.MainFontGray};
`;

// <SongList
// nomColums={10}
// keyExtractor={item => item.song_id}
// data={[songData[0].chill]}
// renderItem={({ item }) => (
//   <SongBox>
//     <SongCover>
//       <CoverImage
//         source={{
//           url: `${item.small_img_url}`
//         }}
//       ></CoverImage>
//     </SongCover>
//     <SongInfo>
//       <SongTitle>{item.song_name}</SongTitle>
//       <Artist>{item.artist_name}</Artist>
//     </SongInfo>
//   </SongBox>
// )}
// />

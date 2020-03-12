import React, { useState } from "react";
import * as Font from "expo-font";
import Welcome from "./src/screens/Welcome";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    InterstateRegular: require("./src/assets/fonts/InterstateRegular.ttf"),
    InterstateThin: require("./src/assets/fonts/InterstateThin.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Welcome />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

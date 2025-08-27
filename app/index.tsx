// App.js
import React from "react";
import { SafeAreaView } from "react-native";
import ProfileScreen from "../screens/ProfileScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Switch between the screens below for testing */}
      {/* <LoginScreen /> */}

      {<ProfileScreen />}
    </SafeAreaView>
  );
}

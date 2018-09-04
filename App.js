import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeScreen from "./component/HomeScreen";
import SettingScreen from "./component/SettingScreen";

export default class App extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./abdullah.png")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingScreen
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

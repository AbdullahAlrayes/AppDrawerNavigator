import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Icon } from "native-base";

class SettingScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="settings" style={{ fontSize: 24, color: tintColor }} />
    )
  };
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}
export default SettingScreen;

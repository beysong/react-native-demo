import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ButtonDemo from "../screens/demo/ButtonDemo";
import DemoIndex from "../screens/demo/DemoIndex";

const Demo = createStackNavigator({
  // AuthLoading: AuthLoading,
  ButtonDemo: ButtonDemo,
  DemoIndex: DemoIndex
});

Demo.navigationOptions = {
  tabBarLabel: "ButtonDemo",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

export default Demo;

import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import AuthLoading from "../screens/auth/AuthLoading";

const Auth = createStackNavigator({
  // AuthLoading: AuthLoading,
  Login: Login,
  Register: Register
});

Auth.navigationOptions = {
  tabBarLabel: "Login",
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

export default Auth;

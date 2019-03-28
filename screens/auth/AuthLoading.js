import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { connect } from "react-redux";

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value = store[i][1];
          console.log(key, value);
        });
      });
    });
    const test = await AsyncStorage.getItem("persist:root");
    const { token } = this.props;
    console.log("token", token);
    console.log("userToken", test);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // const userToken = this.props.user;
    this.props.navigation.navigate(token ? "Home" : "Login");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.login.user,
    token: state.login.token
  };
}
export default connect(
  mapStateToProps,
  null
)(AuthLoading);

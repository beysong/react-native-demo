import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, Container, Content } from "native-base";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <Container>
        <Content>
          {/* <StyleProvider style={buttonTheme()}>
          <Button onPress={() => this.props.navigation.navigate("Login")}>
            <Text>to登录1</Text>
          </Button>
        </StyleProvider> */}
          <Button block onPress={() => this.props.navigation.navigate("Login")}>
            <Text>to登录2</Text>
          </Button>
          {/* <View
          style={{
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#ff6600",
            transform: [{ skewX: "-20deg" }],
            backgroundColor: "#ff6600"
          }}
        >
          <Text
            style={{
              transform: [{ skewX: "20deg" }],
              color: "white"
            }}
            onPress={() => this.props.navigation.push("Login")}
          >
            view login
          </Text>
        </View> */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

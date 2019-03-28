import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Text,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Icon
} from "native-base";

export default class ButtonDemo extends React.Component {
  // static navigationOptions = {
  //   title: "Button"
  // };
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Button</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content>
          <Button light>
            <Text> Light </Text>
          </Button>
          <Button primary>
            <Text> Primary </Text>
          </Button>
          <Button success>
            <Text> Success </Text>
          </Button>
          <Button info>
            <Text> Info </Text>
          </Button>
          <Button warning>
            <Text> Warning </Text>
          </Button>
          <Button danger>
            <Text> Danger </Text>
          </Button>
          <Button dark>
            <Text> Dark </Text>
          </Button>
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

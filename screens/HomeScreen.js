import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { MonoText } from "../components/StyledText";

const allDemo = [
  { icon: "airplane", name: "Button1", routeName: "Button" },
  { icon: "airplane", name: "Button2", routeName: "Button" },
  { icon: "airplane", name: "Button3", routeName: "Button" },
  { icon: "airplane", name: "Button4", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button6", routeName: "Button" }
];
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Grid>
            {(() => {
              let con = [];
              let j = 0;
              let color1 = "#635DB7";
              let color2 = "#00CE9F";
              for (let i = 0; i < allDemo.length; i += 4) {
                if (j % 2) {
                  let temp = color1;
                  color1 = color2;
                  color2 = temp;
                }
                j++;
                con.push(
                  <Row key={i} style={{ backgroundColor: "#635DB7" }}>
                    <Grid>
                      <Col
                        style={{
                          backgroundColor: i % 2 ? color1 : color2
                        }}
                      >
                        <Icon active name={allDemo[i].icon} />
                        <Text>{allDemo[i].name || ""}</Text>
                      </Col>
                      <Col
                        style={{
                          backgroundColor: (i + 1) % 2 ? color1 : color2
                        }}
                      >
                        {i + 1 < allDemo.length ? (
                          <View>
                            <Icon active name={allDemo[i + 1].icon} />
                            <Text>{allDemo[i + 1].name || ""}</Text>
                          </View>
                        ) : (
                          false
                        )}
                      </Col>
                      <Col
                        style={{
                          backgroundColor: (i + 2) % 2 ? color1 : color2
                        }}
                      >
                        {i + 2 < allDemo.length ? (
                          <View>
                            <Icon active name={allDemo[i + 2].icon} />
                            <Text>{allDemo[i + 2].name || ""}</Text>
                          </View>
                        ) : (
                          false
                        )}
                      </Col>
                      <Col
                        style={{
                          backgroundColor: (i + 3) % 2 ? color1 : color2
                        }}
                      >
                        {i + 3 < allDemo.length ? (
                          <View>
                            <Icon active name={allDemo[i + 3].icon} />
                            <Text>{allDemo[i + 3].name || ""}</Text>
                          </View>
                        ) : (
                          false
                        )}
                      </Col>
                    </Grid>
                  </Row>
                );
              }
              return con;
            })()}
          </Grid>
          {/* <Grid>
            <Col style={{ backgroundColor: "#635DB7" }}>
              <Grid>
                <Row style={{ backgroundColor: "#00CE9F" }} />
                <Row style={{ backgroundColor: "#635DB7" }} />
                <Row style={{ backgroundColor: "#00CE9F" }} />
                <Row style={{ backgroundColor: "#635DB7" }} />
              </Grid>
            </Col>
            <Col style={{ backgroundColor: "#00CE9F" }}>
              <Grid>
                <Row style={{ backgroundColor: "#635DB7", height: 60 }} />
                <Row style={{ backgroundColor: "#00CE9F", height: 60 }} />
                <Row style={{ backgroundColor: "#635DB7", height: 60 }} />
                <Row style={{ backgroundColor: "#00CE9F", height: 60 }} />
              </Grid>
            </Col>
            <Col style={{ backgroundColor: "#635DB7" }}>
              <Grid>
                <Row style={{ backgroundColor: "#00CE9F", height: 60 }} />
                <Row style={{ backgroundColor: "#635DB7", height: 60 }} />
                <Row style={{ backgroundColor: "#00CE9F", height: 60 }} />
                <Row style={{ backgroundColor: "#635DB7", height: 60 }} />
              </Grid>
            </Col>
            <Col style={{ backgroundColor: "#00CE9F" }}>
              <Grid>
                <Row style={{ backgroundColor: "#635DB7", height: 60 }} />
                <Row style={{ backgroundColor: "#00CE9F", height: 60 }} />
                <Row style={{ backgroundColor: "#635DB7", height: 60 }} />
                <Row style={{ backgroundColor: "#00CE9F", height: 60 }} />
              </Grid>
            </Col>
          </Grid> */}
        </Content>

        {/* <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/robot-dev.png")
                    : require("../assets/images/robot-prod.png")
                }
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              {this._maybeRenderDevelopmentModeWarning()}

              <Text style={styles.getStartedText}>Get started by opening</Text>

              <View
                style={[
                  styles.codeHighlightContainer,
                  styles.homeScreenFilename
                ]}
              >
                <MonoText style={styles.codeHighlightText}>
                  screens/HomeScreen.js
                </MonoText>
              </View>

              <Text style={styles.getStartedText}>
                Change this text and your app will automatically reload.
              </Text>
            </View>

            <View style={styles.helpContainer}>
              <TouchableOpacity
                onPress={this._handleHelpPress}
                style={styles.helpLink}
              >
                <Text style={styles.helpLinkText}>
                  Help, it didn’t automatically reload!
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>
              This is a tab bar. You can edit it in:
            </Text>

            <View
              style={[styles.codeHighlightContainer, styles.navigationFilename]}
            >
              <MonoText style={styles.codeHighlightText}>
                navigation/MainTabNavigator.js
              </MonoText>
            </View>
          </View>
        </View> */}
      </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync("https://baidu.com");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});

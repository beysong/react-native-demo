import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
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

const allDemo = [
  { icon: "airplane", name: "Button", routeName: "ButtonDemo" },
  { icon: "airplane", name: "Button2", routeName: "Button" },
  { icon: "airplane", name: "Button3", routeName: "Button" },
  { icon: "airplane", name: "Button4", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button6", routeName: "Button" }
];
export default class DemoIndex extends React.Component {
  static navigationOptions = {
    header: null
  };
  toDemo(r) {
    this.props.navigation.push(r);
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>DemoIndex</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Grid>
            {(() => {
              let con = [];
              let j = 0;
              let color1 = "#f7f7f7";
              let color2 = "#00CE9F";
              for (let i = 0; i < allDemo.length; i += 4) {
                if (j % 2) {
                  let temp = color1;
                  color1 = color2;
                  color2 = temp;
                }
                j++;
                con.push(
                  <Row key={i}>
                    <Grid>
                      <Col
                        onPress={() => {
                          console.log("sdsdsdf");
                          this.toDemo(allDemo[i].routeName);
                        }}
                        style={{
                          backgroundColor: i % 2 ? color1 : color2
                        }}
                      >
                        <View
                          style={{ alignItems: "center", paddingVertical: 20 }}
                        >
                          <Icon active name={allDemo[i].icon} />
                          <Text>{allDemo[i].name || ""}</Text>
                        </View>
                      </Col>
                      <Col
                        onPress={() => {
                          if (i + 1 < allDemo.length) {
                            this.toDemo(allDemo[i + 1].routeName);
                          }
                        }}
                        style={{
                          backgroundColor: (i + 1) % 2 ? color1 : color2
                        }}
                      >
                        {i + 1 < allDemo.length ? (
                          <View
                            style={{
                              alignItems: "center",
                              paddingVertical: 20
                            }}
                          >
                            <Icon active name={allDemo[i + 1].icon} />
                            <Text>{allDemo[i + 1].name || ""}</Text>
                          </View>
                        ) : (
                          false
                        )}
                      </Col>
                      <Col
                        onPress={() => {
                          if (i + 2 < allDemo.length) {
                            this.toDemo(allDemo[i + 2].routeName);
                          }
                        }}
                        style={{
                          backgroundColor: (i + 2) % 2 ? color1 : color2
                        }}
                      >
                        {i + 2 < allDemo.length ? (
                          <View
                            style={{
                              alignItems: "center",
                              paddingVertical: 20
                            }}
                          >
                            <Icon active name={allDemo[i + 2].icon} />
                            <Text>{allDemo[i + 2].name || ""}</Text>
                          </View>
                        ) : (
                          false
                        )}
                      </Col>
                      <Col
                        onPress={() => {
                          if (i + 3 < allDemo.length) {
                            this.toDemo(allDemo[i + 3].routeName);
                          }
                        }}
                        style={{
                          backgroundColor: (i + 3) % 2 ? color1 : color2
                        }}
                      >
                        {i + 3 < allDemo.length ? (
                          <View
                            style={{
                              alignItems: "center",
                              paddingVertical: 20
                            }}
                          >
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
        </Content>
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

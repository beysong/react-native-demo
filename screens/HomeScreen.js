import React from "react";
import { Image, Platform, StyleSheet, ScrollView } from "react-native";
import { WebBrowser } from "expo";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Badge,
  Right,
  Title,
  Icon,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Item,
  Button,
  Input,
  H1,
  View,
  Text
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { MonoText } from "../components/StyledText";
const cards = [
  {
    text: "Card One",
    name: "One",
    image: require("../assets/images/slider1.jpg")
  },
  {
    text: "Card One2",
    name: "One2",
    image: require("../assets/images/slider2.jpg")
  }
];
const allDemo = [
  { icon: "airplane", name: "Button", routeName: "ButtonDemo" },
  { icon: "airplane", name: "DemoIndex", routeName: "DemoIndex" },
  { icon: "airplane", name: "Button3", routeName: "Button" },
  { icon: "airplane", name: "Button4", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" },
  { icon: "airplane", name: "Button5", routeName: "Button" }
];
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      headerStatus: 1
    };
  }

  static navigationOptions = {
    header: null
  };
  toDemo(r) {
    this.props.navigation.navigate(r);
  }
  render() {
    return (
      <Container>
        {this.state.headerStatus ? (
          <Header
            transparent
            searchBar
            rounded
            style={{ opacity: this.state.opacity }}
          >
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="搜索" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>搜索</Text>
            </Button>
          </Header>
        ) : (
          <Header>
            <Left>
              <Button transparent>
                <Icon name="search" />
              </Button>
            </Left>
            <Body>
              <Title>首页</Title>
            </Body>
            <Right>
              <Button transparent>
                <Badge
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    height: 18
                  }}
                >
                  <Text style={{ lineHeight: 12, fontSize: 12 }}>2</Text>
                </Badge>
                <Icon name="mail" />
              </Button>
            </Right>
          </Header>
        )}
        <Content
          scrollEventThrottle={30}
          onScroll={e => {
            console.log(333, e.nativeEvent.contentOffset.y);
            let yyyyy = e.nativeEvent.contentOffset.y;
            let temp = (150 - (yyyyy > 150 ? 150 : yyyyy)) / 150;
            let headerStatus;
            if (yyyyy > 100) {
              headerStatus = 0;
            } else {
              headerStatus = 1;
            }
            this.setState({
              opacity: temp,
              headerStatus
            });
          }}
        >
          <View style={{ minHeight: 450 }}>
            <DeckSwiper
              ref={c => (this._deckSwiper = c)}
              dataSource={cards}
              renderEmpty={() => (
                <View style={{ alignSelf: "center" }}>
                  <Text>Over</Text>
                </View>
              )}
              renderItem={item => (
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={item.image} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>NativeBase</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 300, flex: 1 }}
                      source={item.image}
                    />
                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: "#ED4A6A" }} />
                    <Text>{item.name}</Text>
                  </CardItem>
                </Card>
              )}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              // backgroundColor: "pink",
              padding: 10
            }}
          >
            {[1, 2, 3, 4, 5, 6].map(v => (
              <View
                key={v}
                style={{ backgroundColor: "gray", padding: 10, margin: 10 }}
              >
                <Text>banner {v}</Text>
              </View>
            ))}
            <View style={{ width: 10 }} />
          </ScrollView>
          <View style={{ padding: 10 }}>
            <Button>
              <Text>ffff asdf asfd</Text>
            </Button>
            <Text>ffff asdf asfd</Text>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
            <H1>Header One</H1>
          </View>
          {/* <Grid>
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

import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  ListItem,
  Left,
  Button,
  Right,
  Switch,
  Text,
  Toast,
  Spinner,
  Thumbnail
} from "native-base";
import { login } from "../../actions";

class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", pwd: "" };
  }
  static navigationOptions = {
    title: "登录"
  };
  doLogin = () => {
    const { login: login2, navigation } = this.props;
    if (!this.state.username) {
      Toast.show({
        text: "请输入账号",
        buttonText: "确定",
        position: "bottom",
        style: { marginBottom: 150, elevation: -1 }
      });
      return;
    }
    if (!this.state.pwd) {
      Toast.show({
        text: "密码不能为空",
        buttonText: "确定",
        position: "bottom",
        style: { marginBottom: 150, elevation: -1 }
      });
      return;
    }
    login2({
      account: this.state.username,
      pwd: this.state.pwd,
      role: "m"
    }).then(res => {
      console.log("then data：", res);
      if (res.status === 200) {
        navigation.navigate("Home");
      }
    });
  };
  render() {
    const { user } = this.props;
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }} transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../../assets/images/robot-prod.png")}
                />
                <Body>
                  <Text>{user.name || ""}</Text>
                  <Text note>{JSON.stringify(user)}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>飞行模式</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.login.user
  };
}
function matchDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ login }, dispatch)
  };
  // return bindActionCreators({ login: login }, dispatch);
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Center);

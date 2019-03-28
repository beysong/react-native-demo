import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Toast,
  Spinner
} from "native-base";
import { login } from "../../actions";

class Login extends React.Component {
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

    // dispatch(login({ account: "m_root", pwd: "888888", role: "m" })).then(v => {
    //   console.log("v:", v);
    // });
  };
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>账号</Label>
              <Input onChangeText={username => this.setState({ username })} />
            </Item>
            <Item inlineLabel last>
              <Label>密码</Label>
              <Input onChangeText={pwd => this.setState({ pwd })} />
            </Item>
          </Form>

          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              paddingVertical: 40,
              paddingHorizontal: 10
            }}
          >
            <Button
              block
              onPress={() => {
                this.doLogin();
              }}
            >
              <Text>登录</Text>
              {this.props.login_loading ? (
                <Spinner size="small" color="#000" />
              ) : (
                false
              )}
            </Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignSelf: "flex-end"
            }}
          >
            <Button
              small
              transparent
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text>没有账号？注册</Text>
            </Button>
          </View>
          {/* <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Go back</Text>
          </Button>
          <Text>loading{this.props.login_loading ? "1" : "2"}</Text>
          <Button onPress={this.doLogin}>
            <Text>登录</Text>
          </Button> */}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    login_loading: state.login.login_loading
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
)(Login);

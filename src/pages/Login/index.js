import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Text, Input, Button } from "react-native-elements";

class Login extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text h1> Login </Text>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button
          type="clear"
          onPress={() =>
            this.props.login({ username: "username", password: "password" })
          }
          title="登录"
        />
        <Button
          type="clear"
          onPress={() => this.props.navigation.navigate("Register")}
          title="注册"
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (data) => {
      dispatch(login(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

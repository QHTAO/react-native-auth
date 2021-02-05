import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView, Button } from "react-native";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class Login extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 100 }}> Login </Text>
        <Button
          onPress={() =>
            this.props.login({ username: "username", password: "password" })
          }
          title="登录"
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

import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Text, Input, Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";
class Login extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text h1> Login </Text>
          </View>

          <Input placeholder="username" placeholderTextColor="#000000" />
          <Input placeholder="password" placeholderTextColor="#000000" />
          <Button
            onPress={() =>
              this.props.login({
                username: "username",
                password: "password",
              })
            }
            title="登录"
          />

          <View style={styles.footer}>
            <Button
              type="clear"
              onPress={() => this.props.navigation.navigate("Register")}
              title="注册"
            />
          </View>
        </View>
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

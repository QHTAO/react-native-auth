import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-elements";

export class Register extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text h1>Register</Text>
        <Button
          type="clear"
          onPress={() => this.props.navigation.navigate("Login")}
          title="登录"
        />
      </SafeAreaView>
    );
  }
}

export default Register;

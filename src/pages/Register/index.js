import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import globalStyles from "../../styles";
import styles from "./styles";
export class Register extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={globalStyles.container}>
          <View style={styles.header}>
            <Text h1>Register</Text>
          </View>
          <View style={globalStyles.form}>
            <Input placeholder="username" placeholderTextColor="#000000" />
            <Input placeholder="email" placeholderTextColor="#000000" />
            <Input placeholder="password" placeholderTextColor="#000000" />
          </View>
          <Button
            onPress={() => this.props.navigation.navigate("Login")}
            title="注册"
          />
          <View style={styles.footer}>
            <Button
              type="clear"
              onPress={() => this.props.navigation.navigate("Login")}
              title="登录"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Register;

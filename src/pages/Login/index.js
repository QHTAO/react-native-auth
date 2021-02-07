import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Text, Input, Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Formik } from "formik";

import styles from "./styles";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    this.props.login(values);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text h1> Login </Text>
          </View>

          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={this.handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Input
                  placeholder="username"
                  onChangeText={handleChange("username")}
                  placeholderTextColor="#000000"
                />
                <Input
                  placeholder="password"
                  onChangeText={handleChange("password")}
                  placeholderTextColor="#000000"
                />
                <Button onPress={handleSubmit} title="登录" />
              </View>
            )}
          </Formik>

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

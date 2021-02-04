import React, { Component } from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 100 }}> Home </Text>
        <Button onPress={() => this.props.logout()} title="退出" />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

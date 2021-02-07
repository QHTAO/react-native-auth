import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "../../components";
import { logout } from "../../actions/auth";
import { Text, Button } from "react-native-elements";
import globalStyles from "../../styles";

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={globalStyles.container}>
          <Text h1> Home </Text>
          <Text> token: {this.props.token}</Text>
          <Button onPress={() => this.props.logout()} title="退出" />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

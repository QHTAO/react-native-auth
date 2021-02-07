import React, { Component } from "react";
import { SafeAreaView as NativeSafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

class SafeAreaView extends Component {
  render() {
    return (
      <NativeSafeAreaView style={styles.safeAreaView}>
        {this.props.children}
      </NativeSafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default SafeAreaView;

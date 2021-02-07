import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home as HomeScreen, Login as LoginScreen } from "../pages";
import { SafeAreaView } from "react-native";

import RegisterScreen from "../pages/Register";

import AuthStorage from "../utils/authStorage";
import { connect } from "react-redux";
import { loginApp } from "../actions/auth";
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: "#FFFFFF" },
};

function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

class RootNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuth: false };
  }
  async componentDidMount() {
    const storage = new AuthStorage();
    const token = await storage.getAccessToken();
    if (!!token) {
      console.log("App Has Token:", token);
      this.props.loginApp(token);
    } else {
      console.log("App No Token!");
    }
  }
  render() {
    const { isAuth } = this.props;
    return (
      <NavigationContainer>
        {isAuth ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth || false,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginApp: () => {
      dispatch(loginApp(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);

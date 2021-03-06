import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home as HomeScreen, Login as LoginScreen } from "../pages";
import AuthStorage from "../utils/authStorage";
import { connect } from "react-redux";
import { login } from "../actions/auth";
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
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
      console.log("has token:", token);
      this.props.login();
    } else {
      console.log("no token!");
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
    login: () => {
      dispatch(login());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);

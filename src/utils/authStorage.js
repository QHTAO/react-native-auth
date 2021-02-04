import AsyncStorage from "@react-native-async-storage/async-storage";
class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }
  getAccessToken() {
    try {
      return AsyncStorage.getItem(`${this.namespace}:token`);
    } catch (e) {
      console.log(e);
    }
  }

  setAccessToken(accessToken) {
    try {
      return AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
    } catch (e) {
      console.log(e);
    }
  }

  removeAccessToken() {
    try {
      return AsyncStorage.removeItem(`${this.namespace}:token`);
    } catch (e) {
      console.log(e);
    }
  }
}

export default AuthStorage;

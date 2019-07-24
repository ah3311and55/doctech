import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase';

import { Header } from 'react-native-elements';
// You can import from local files

// or any pure javascript modules available in npm
import { Input } from 'react-native-elements';

export default class Login extends React.Component {
  goToHome = () => {
    this.props.navigation.navigate('Guides', {
      username: this.state.username,
      password: this.state.password,
    });
  };
  goToRegister = () => {
    this.props.navigation.navigate('Signup1');
  };

  state = {
    username: null,
    password: null,
    message: '',
  };
  LoggedIn = () => {
    const users = firebase
      .database()
      .ref('users')
      .on('value', snapshot => {
        const users = snapshot.val();
        var check = false;
        for (var key in users) {
          console.log(users.length + ' is ');
          var username = users[key].username;
          var password = users[key].password;
          if (
            username == this.state.username &&
            password == this.state.password
          ) {
            check = true;
            break;
          }
        }
        if (check) {
          this.props.navigation.navigate('Profile', {
            username: this.state.username,
          });
        } else {
          this.setState({ message: "username and password don't match" });
        }
        this.forceUpdate();
      });
  };
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <TextInput
            style={styles.inputs}
            placeholder=" Doctor's ID"
            onChangeText={text => this.setState({ username: text })}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />

          <TouchableOpacity
            style={{ textAlign: 'center', fontSize: 20 }}
            onPress={this.LoggedIn}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                width: 250,
                height: 50,
                alignSelf: 'center',
                borderWidth: 0.5,
                borderRadius: 200,
                padding: 6,
                backgroundColor: '#b30000',
                color: '#ecf0f1',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToRegister}>
            <Text
              style={{ color: '#660000', textAlign: 'center', padding: 60 }}>
              Dont have an account?
            </Text>
          </TouchableOpacity>

          <Text style={{ color: 'red', textAlign: 'center' }}>
            {' '}
            {this.state.message}
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    //padding: 8,
    alignItems: 'center',
    //margin: 10,
  },
  inputs: {
    bottom: 80,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: 350,
    margin: 10,
    color: 'black',
    height: 60,
    padding: 15,
  },
  image: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

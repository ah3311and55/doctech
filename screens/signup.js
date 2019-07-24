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
import { Input } from 'react-native-elements';
// or any pure javascript modules available in npm

export default class Register extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    message: '',
  };
  publish = () => {
    firebase
      .database()
      .ref('users')
      .on('value', snapshot => {
        const users = snapshot.val();
        var Usernames = [];
        for (var key in users) {
          Usernames.push(users[key].username);
        }
        for (var i = 0; i < Usernames.length; i++) {
          var current = Usernames[i];
          if (current == this.state.username) {
            this.setState({
              message: 'username already exists',
            });
            this.forceUpdate();
            return;
          }
        }
        const usersAdd = firebase.database().ref('users');
        usersAdd.push({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        });
        this.props.navigation.navigate('Home', {
          username: this.state.username,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/logo.png')} />
        <TextInput
          style={styles.inputs}
          placeholder="Doctor's Id"
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          style={styles.inputs}
          placeholder="E-mail Address"
          onChangeText={text => this.setState({ email: text })}
        />
        <TouchableOpacity
          style={{ borderWidth: 0.2, bottom: 30 }}
          onPress={this.publish}>
          <Text style={styles.text}>Register</Text>
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
    padding: 8,
    alignItems: 'center',
  },
  inputs: {
    bottom: 90,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: 370,
    margin: 10,
    color: 'black',
    height: 60,
    padding: 15,
  },
  image: {
    bottom: 40,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    width: 250,
    height: 50,
    alignSelf: 'center',
    borderRadius: 200,
    padding: 6,
    backgroundColor: '#b30000',
    color: '#ecf0f1',
    bottom: 30,
    fontSize: 20,
    borderWidth: 0.2,
    //padding: 60,
  },
});

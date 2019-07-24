//IMPORTS!

import * as React from 'react';
// IMPORT COMPONENTS
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Linking,
  Picker,
  Card,
} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
// IMPORT NAVIGATION
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Input } from 'react-native-elements';
// IMPORT SCREENS.
import SecondScreen from './screens/secondScreen';
import ThirdScreen from './screens/thirdScreen';
import LogIn from './screens/logInScreen';
import Search from './screens/search';
import Signup from './screens/signup';
import firebase from './firebase';

// ALL PROFILE SCREEN CODE (ONLY 1 SCREEN CODE HERE)
class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // for error checking
    this.params = this.props.navigation.state.params;
    console.log(this.params); // for debugging.
  }

  state = {
    location: '',
    userName: '',
    phonenumber: '',
    fullname: '',
    gender: '',
    id: '',
    bloodtype: '',
  };

  // handlePress = () => {
  //   if (this.state.name == "Sydney") {
  //     this.setState({name: 'Kyle'});
  //     this.setState({location: 'Jericho'});
  //   } else {
  //     this.setState({name: 'Sydney'});
  //     this.setState({location: 'USA'});
  //   }
  // };
  // this.setParams({userName: 'steve'});

  handlePress = () => {
    this.props.navigation.navigate('Favorites');
  };

  render() {
    return (
      <View style={styles.container}>
      <Header
        placement="center"
        centerComponent={{
          text: 'Adding Patient',
          style: { color: '#ecf0f1', fontSize: 20, bottom:17 },
        }}
        containerStyle={{
        margin: 50,
        bottom: 110,
        backgroundColor: 'black',
        //justifyContent: 'space-around',
        height: 60,
        width: 400,
        borderRadius: 10,
        alignSelf: 'center',
        textAlign: 'center',
        }}
      />
          <TextInput
            placeholder="Phone Number"
            onChangeText={text => this.setState({ phonenumber: text })}
            style={styles.box}
          />
          <TextInput
            placeholder="Fullname"
            onChangeText={text =>this.setState({fullname: text})}
            style={styles.box}
          />
          <TextInput
            placeholder="Location"
            onChangeText={text =>this.setState({location: text})}
            style={styles.box}
          />
          <TextInput
            placeholder="Gender"
            onChangeText={text =>this.setState({gender: text})}
            style={styles.box}
          />
          <TextInput
            placeholder="ID Number"
            onChangeText={text =>this.setState({id: text})}
            style={styles.box}
          />
          <TextInput
            placeholder="Blood Type"
            onChangeText={text =>this.setState({bloodtype: text})}
            style={styles.box}
          />
          <TouchableOpacity style={styles.button} onPress={this.publishPost}>
            <Text>Add</Text>
          </TouchableOpacity>
      </View>
    );
  }

  publishPost = () => {
    const posts = firebase.database().ref('posts');
    posts.push({
      phonenumber: this.state.phonenumber,
      fullname: this.state.fullname,
      location: this.state.location,
      gender: this.state.gender,
      id: this.state.id,
      bloodtype: this.state.bloodtype,
    });
    this.props.navigation.navigate('Screen2');
  };
}
// publishPost = () => {
//   firebase
//     .firestore()
//     .collection('pics')
//     .add({
//       caption: this.state.caption,
//     });
// };
//

// handlePress =  () => {
//   if (this.state.displayText == "Hello") {
//     this.setState({ displayText: "Goodbye!" })
//   } else {
//     this.setState({ displayText: "Hello" })
//   }
// }

// FINISHED.
// STYLESHEET FOR THAT PAGE.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    //padding: 8,
    alignItems: 'center',
    top: 30,
  },

  box: {
    bottom: 150,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: 350,
    margin: 5,
    color: 'black',
    height: 60,
    padding: 15,
  },
  button: {
    textAlign: 'center',
    width: 100,
    height: 60,
    alignSelf: 'center',
    borderRadius: 200,
    padding:20,
    backgroundColor: '#b30000',
    color: '#ecf0f1',
    bottom: 30,
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 0.2,
    //padding: 60,
  },
});

// ALLL NAVIGATION.
// Navigation.
const FavoriteStack = createStackNavigator({
  //Profile: ProfileScreen,
  Screen2: SecondScreen,
  Screen3: ThirdScreen,
});

const AppTabs = createBottomTabNavigator({
  Profile: ProfileScreen,
  Favorites: FavoriteStack,
  //Screen2: SecondScreen,
  //Screen3: ThirdScreen
});

const AppSwitch = createSwitchNavigator({
  Sign: LogIn,
  Signup1: Signup,
  Home: AppTabs,
});

// const App = createAppContainer(AppTabs);

const App = createAppContainer(AppSwitch);

export default App;

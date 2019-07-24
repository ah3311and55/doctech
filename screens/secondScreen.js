import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import firebase from '../firebase';
import { Card } from 'react-native-elements';

export default class SecondScreen extends React.Component {
  // FOR TESTING PURPOSES.
  constructor(props) {
    super(props);
    //console.log(props); // for error checking
    this.params = this.props.navigation.state.params;
    //console.log(this.params); // for debugging.
    // console.log('hello');
    //console.log(this.state.captions);
  }

  state = {
    name: 'Kyle',
    location: '',
    users: {},
    posts:[],
    captions: ['2', 'kyle', 'ahmad'],
    debugStateArray: ['6', '7', '8', '9', '10'],
  };

  handlePress = () => {
    if (this.state.name == 'Sydney') {
      this.setState({ name: 'Kyle' });
      this.setState({ location: 'Jericho' });
    } else {
      this.setState({ name: 'Sydney' });
      this.setState({ location: 'USA' });
    }
    //this.props.navigation.navigate('Screen3');
  };

  // array = ['0', '1', '2'];
  // newArray = [
  //   {"location": 'jericho', "id": '2032u09', "fullname": 'kyle dsouza'},
  //   {"location": 'ramallah', "id": '3785', "fullname": 'saja',},
  // ];


  componentWillMount = () => {
    firebase
      .database()
      .ref('posts')
      .on('value', snapshot => {
        const posts = snapshot.val();
        var captions = [];
        for (var key in posts) {
          captions.push(posts[key]);
          // const post = posts[key];
          // var phonenumber = posts[key].phonenumber;
          // holder.phonenumber.push(phonenumber);
          // var fullname = posts[key].fullname;
          // holder.push(fullname);
          // var location = posts[key].location;
          // holder.push(location);
          // var gender = posts[key].gender;
          // holder.push(gender);
          // var id = posts[key].id;
          // holder.push(id);
          // var bloodtype = posts[key].id;
          // holder.push(bloodtype);
          // captions.unshift(post);
        }
        // console.log('hello');
        //console.log( "captions asg" + captions);
        this.setState({ captions: captions });
        console.log(this.state.captions);
      });
  };

  // to run it from the start

  // debugArray = ['1', '2', '3', '4', '5'];
  // build a flatlist to show all the items.
  render() {
    return (
      <View style={styles.container}>
        <Text> Acounts</Text>

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={this.state.captions}
          renderItem={({ item, index }) => (
            <View style={styles.container}>
              <Text></Text>
              <TouchableOpacity onPress={this.handlePress()}>
                <Card
                  style={{
                    height: 100,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.txt}> phonenumber: {item.phonenumber}</Text>
                  <Text style={styles.txt}> fullname: {item.fullname}</Text>

                  <Text style={styles.txt}> location: {item.location}</Text>
                  <Text style={styles.txt}> gender: {item.gender}</Text>
                  <Text style={styles.txt}> id information: {item.id}</Text>
                  <Text style={styles.txt}> bloodtype: {item.bloodtype}</Text>
                </Card>
              </TouchableOpacity>
            </View>
          )}
        />
        
      </View>
    );
  }

  // this gets values from database
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
  },
});

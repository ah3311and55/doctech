import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default class ThirdScreen extends React.Component {
  state = {
    name: 'Kyle',
    location: 'Jericho',
   }

  handlePress = () => {
    if (this.state.name == "Sydney") {
      this.setState({name: 'Kyle'});
      this.setState({location: 'Jericho'});
    } else {
      this.setState({name: 'Sydney'});
      this.setState({location: 'USA'});
    } 
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Screen3!
        </Text>
        <Text style={styles.paragraph}>
          My favorite song is dancing in the moonlight!
        </Text>
        {/*/ <TouchableOpacity style={styles.button} onPress={this.handlePress}>
        //   <Text>
        //     Click me!
        //   </Text>
        // </TouchableOpacity>*/}
      </View>
    );
  }

  // handlePress =  () => { 
  //   if (this.state.displayText == "Hello") {
  //     this.setState({ displayText: "Goodbye!" })
  //   } else {
  //     this.setState({ displayText: "Hello" })
  //   }
  // }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 2,
    padding: 8,
    backgroundColor: 'yellow',
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DCDCDC',
    padding: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 110,
  }
});
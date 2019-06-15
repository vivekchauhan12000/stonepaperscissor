import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: require("./src/images/rock.png")
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  playButtonPressed = () => {
    
    var rNumber = this.getRandomValue();

    switch (rNumber) {
      case 1:
        this.setState({ uri: require("./src/images/paper.png") });
        break;
      case 2:
        this.setState({ uri: require("./src/images/rock.png") });
        break;
      case 3:
        this.setState({ uri: require("./src/images/sc.png") });
        break;
      

      default:
        this.setState({ uri: require("./src/images/paper.png") });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.uri} />
        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.gamebutton}>stone paper scissor</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36C47D",
    alignItems: "center",
    justifyContent: "center"
  },
  gamebutton: {
    marginTop: 10,
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 5,
    paddingVertical: 4,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#FFF"
  }
});
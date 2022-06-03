import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Start from "./components/Start";
import Entrou from "./components/Entrou";

export default class App extends React.Component {
  state = {
    value: "",
    isClicked: false,
    msg: "",
    isAut: undefined,
  };
  render() {
    const { isClicked, value, msg, isAut } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Prova Semestral</Text>
        {isClicked ? (
          <Entrou
            nome={value}
            onClick={(isClicked, msg, isAut) => {
              this.setState({ isClicked, msg, isAut });
            }}
          />
        ) : (
          <Start
            onClick={(isClicked) => {
              this.setState({ isClicked });
            }}
            onValue={(value) => {
              this.setState({ value });
            }}
            onClean={(value, msg) => {
              this.setState({ value, msg });
            }}
            mensagem={msg}
            autorizado={isAut}
            nome={value}
          />
        )}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "black",
  },
  header: {
    marginTop: 40,
    fontSize: 40,
    color: "red",
    marginBottom: 20,
  },
});

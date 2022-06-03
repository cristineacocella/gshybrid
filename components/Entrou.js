import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Entrou extends React.Component {
  state = {
    value: "",
    isCliecked: "",
    isAut: false,
    msg: "",
  };

  handleAutorizar = () => {
    const { onClick } = this.props;
    const isCliecked = false;
    const value = this.props.nome;
    const msg = `${value} Autorizado`;
    const isAut = true;
    this.setState({ isCliecked, msg, isAut });
    onClick(false, msg, isAut);
  };

  handleNaoAutorizar = () => {
    const { onClick } = this.props;
    const isCliecked = false;
    const value = this.props.nome;
    const msg = `${value} Não Autorizado`;
    const isAut = false;
    this.setState({ isCliecked, msg, isAut });
    onClick(false, msg, isAut);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{this.props.nome}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.botao}
            onPress={this.handleNaoAutorizar}
          >
            <Text style={styles.txtBotao}>Não Autorizar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.handleAutorizar}>
            <Text style={styles.txtBotao}>Autorizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
  },
  subContainer: {
    flexDirection: "row",
  },
  text: {
    flex: 1,
    color: "white",
    textAlign: "center",
    height: 30,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "flex-end",
  },
  botao: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 7,
    marginLeft: 10,
  },
  txtBotao: {
    color: "white",
    fontSize: 18,
  },
});

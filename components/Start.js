import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

export default class Start extends React.Component {
  state = {
    value: "",
    isCliecked: false,
    isAut: false,
    msg: "",
  };

  handleChangeText = (text) => {
    const { onValue } = this.props;
    const value = text;
    this.setState({ value });
    onValue(value);
  };

  handleSolicitacao = () => {
    const { onClick } = this.props;
    if (this.state.value.length === 0) {
      Alert.alert("Erro", "Informe o nome");
    } else {
      const isCliecked = true;
      this.setState({ isCliecked });
      onClick(true);
    }
  };

  handleLimpar = () => {
    const { onClean } = this.props;
    const value = "";
    const msg = "";
    this.setState({ value, msg });
    onClean(value, msg);
  };

  render() {
    const { value, msg, isAut } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.input}
            value={this.props.nome}
            placeholder={"Nome"}
            placeholderTextColor={"white"}
            onChangeText={this.handleChangeText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.botao} onPress={this.handleLimpar}>
            <Text style={styles.txtBotao}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={this.handleSolicitacao}
          >
            <Text style={styles.txtBotao}>Solicitar Autorização</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.msg}>
          {this.props.autorizado ? (
            <Text style={styles.txtMsgAut}>{this.props.mensagem}</Text>
          ) : (
            <Text style={styles.txtMsgNaoAut}>{this.props.mensagem}</Text>
          )}
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
  input: {
    flex: 1,
    backgroundColor: "gray",
    color: "white",
    paddingHorizontal: 10,
    height: 30,
    fontSize: 20,
    textAlign: "left",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
    alignSelf: "flex-end",
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
  txtMsgAut: {
    color: "green",
  },
  txtMsgNaoAut: {
    color: "red",
  },
});

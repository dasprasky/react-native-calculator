import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CalcButton from "./../components/CalcButton";
import CalcDisplay from "./../components/CalcDisplay";
import { LinearGradient } from "expo-linear-gradient";
import calculator, {initialState} from "./../lib/Calculator";

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  onDigitPress = (type, value) => {
    this.setState(state => calculator(type, value, state))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            colors={["#FBFBFB", "#EEEEEE"]}
            style={styles.linearGradient}
          >
            <CalcDisplay display = {(this.state.currentValue === "0.") ? this.state.currentValue : parseFloat(this.state.currentValue).toLocaleString()} />
          </LinearGradient>
        </View>

        <View style={styles.buttonParentBackground}>
          <View style={styles.buttonRow}>
            <CalcButton onPress={() => this.onDigitPress("clear")} title="C" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => this.onDigitPress("posneg")} title="+/-" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => this.onDigitPress("percentage")} title="%" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("operator", "/")}} title="/" />
          </View>

          <View
            style={{
              borderBottomColor: "#959595",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginStart:30,
              marginEnd:120
            }}
          />

          <View style={styles.buttonRow}>
            <CalcButton onPress={() => {this.onDigitPress("number", 7)}} title="7" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", 8)}} title="8" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", 9)}} title="9" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("operator", "*")}} title="x" />
          </View>

          <View
            style={{
              borderBottomColor: "#959595",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginStart:30,
              marginEnd:120
            }}
          />

          <View style={styles.buttonRow}>
            <CalcButton onPress={() => {this.onDigitPress("number", 4)}} title="4" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", 5)}} title="5" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", 6)}} title="6" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("operator", "-")}} title="-" />
          </View>

          <View
            style={{
              borderBottomColor: "#959595",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginStart:30,
              marginEnd:120
            }}
          />

          <View style={styles.buttonRow}>
            <CalcButton onPress={() => {this.onDigitPress("number", 1)}} title="1" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", 2)}} title="2" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", 3)}} title="3" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("operator", "+")}} title="+" />
          </View>

          <View
            style={{
              borderBottomColor: "#959595",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginStart:30,
              marginEnd:120
            }}
          />

          <View style={styles.buttonRow}>
            <CalcButton onPress={() => {this.onDigitPress("number", ".")}} title="." color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", 0)}} title="0" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => {this.onDigitPress("number", "00")}} title="00" color="black" backgroundColor="#F3F3F3" />
            <CalcButton onPress={() => this.onDigitPress("equal")} title="=" backgroundColor="#BF3636" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayContainer: { flex: 1, justifyContent: "flex-end" },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  container: { flex: 1 },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: "flex-end",
  },
  buttonParentBackground: {
    backgroundColor: "#F3F3F3",
    paddingBottom: 16,
  },
});

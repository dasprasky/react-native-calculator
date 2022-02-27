import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CalcButton from "./../components/CalcButton";
import CalcDisplay from "./../components/CalcDisplay";
import { LinearGradient } from "expo-linear-gradient";

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
    };
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
            <CalcDisplay display={this.state.display} />
          </LinearGradient>
        </View>

        <View style={styles.buttonParentBackground}>
          <View style={styles.buttonRow}>
            <CalcButton title="C" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="+/-" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="%" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="/" />
          </View>

          <View style={styles.buttonRow}>
            <CalcButton title="7" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="8" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="9" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="x" />
          </View>

          <View style={styles.buttonRow}>
            <CalcButton title="4" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="5" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="6" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="-" />
          </View>

          <View style={styles.buttonRow}>
            <CalcButton title="1" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="2" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="3" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="+" />
          </View>

          <View style={styles.buttonRow}>
            <CalcButton title="." color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="0" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="00" color="black" backgroundColor="#F3F3F3" />
            <CalcButton title="=" backgroundColor="#BF3636" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayContainer: { flex: 1, justifyContent: "flex-end" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
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

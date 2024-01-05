import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='text your name' />

      <Button
        onPress={() => {
          console.log("You tapped the button!");
          alert("click done..");
        }}
        title='Press Me'
      />

      <Text style={styles.headerText}>
        Hello world, this is your fast react native app
      </Text>
      <Text style={styles.headerPera}>this is your fast react native app</Text>
      <StatusBar style='auto' />
      <View
        style={{
          padding: 10,
          margin: 40,
          width: 150,
          height: 150,
          backgroundColor: "steelblue",
        }}>
        <Text style={styles.headerPera}> native app</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  headerPera: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

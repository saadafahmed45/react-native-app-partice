import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./App";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput />
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
      <Button
        onPress={() => {
          console.log("You tapped the button!");
          alert("click done..");
        }}
        title='Press Me'
      />
    </View>
  );
}

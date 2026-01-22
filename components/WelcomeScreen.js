import { router } from "expo-router";
import * as React from "react";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
//import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState("");
  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView
      style={styles.scrollview_container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        keyboardDismissMode="on-drag"
        style={[
          styles.container,
          colorScheme === "light"
            ? { backgroundColor: "#ffffff" }
            : { backgroundColor: "#333333" },
        ]}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/image-lemon.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Text style={styles.text}>
          Little Lemon, your local Mediterranean Bistro
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
    indicatorStyle: "white",
  },
  title: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  text: {
    fontSize: 26,
    padding: 20,
    marginVertical: 8,
    color: "#000000",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});

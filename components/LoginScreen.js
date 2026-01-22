import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [buttonLogin, setButtonLogin] = useState(false);

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#0c0fc0" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Image
          style={styles.logo}
          source={require("../assets/images/image-lemon.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>

      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={"Please enter your email"}
        keyboardType={"email-address"}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={"Please leave password"}
        keyboardType={"default"}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          setButtonLogin((buttonLogin) => !buttonLogin);

          router.back();
        }}
      >
        <Text style={styles.buttonText}>
          {buttonLogin ? "Logout" : "Login"}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
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
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});

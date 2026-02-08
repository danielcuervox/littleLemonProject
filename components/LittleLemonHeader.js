import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "expo-router";

export default function LittleLemonHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuButton}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </Pressable>

      <Text style={styles.text}>Little Lemon</Text>
    </View>
  );
}

//#E67E22
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#495e57",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    fontSize: 28,
    color: "#F4CE14",
  },
  text: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});

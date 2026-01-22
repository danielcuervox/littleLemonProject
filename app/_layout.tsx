import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import "react-native-reanimated";

import LittleLemonFooter from "@/components/LittleLemonFooter";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="login"
            options={{ headerShown: true, title: "login" }}
          />
        </Stack>
      </View>

      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: {
    backgroundColor: "#333333",
  },
  description: {
    fontSize: 24,
    color: "#EDEFEE",
    textAlign: "center",
  },
});

import { Drawer } from "expo-router/drawer";
import { StyleSheet, View } from "react-native";
import "react-native-reanimated";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { router } from "expo-router";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//#f4ce14 - yellow
// #495e57 - dark green

/* 
, DrawerNavigationProp 

export const unstable_settings = {
  anchor: "(tabs)",
}; */

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();

  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={{ paddingTop: insets.top + 20 }}>
        <DrawerItem
          label="Home"
          onPress={() => router.push("/")}
          labelStyle={{ color: "#EDEFEE", fontSize: 16 }}
          style={{ marginBottom: 8 }}
        />
        <DrawerItem
          label="Login"
          onPress={() => router.push("/login")}
          labelStyle={{ color: "#EDEFEE", fontSize: 16 }}
          style={{ marginBottom: 8 }}
        />
        <DrawerItem
          label="Menu"
          onPress={() => router.push("/menu")}
          labelStyle={{ color: "#EDEFEE", fontSize: 16 }}
          style={{ marginBottom: 8 }}
        />
        <DrawerItem
          label="Subscribe"
          onPress={() => router.push("/subscribe")}
          labelStyle={{ color: "#EDEFEE", fontSize: 16 }}
          style={{ marginBottom: 8 }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawer,
        drawerActiveTintColor: "#F4CE14",
        drawerInactiveTintColor: "#EDEFEE",
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="login" options={{ title: "Login" }} />
      <Drawer.Screen name="menu" options={{ title: "Menu" }} />
      <Drawer.Screen name="subscribe" options={{ title: "Subscribe" }} />
      <Drawer.Screen name="welcome" options={{ title: "Welcome" }} />
    </Drawer>
  );
}

const COLORS = {
  background: "#333333",
  primary: "#F4CE14",
  text: "#EDEFEE",
  darkGreen: "#495e57",
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: COLORS.background,
  },
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

/*
<>
      <View style={styles.container}>
        <LittleLemonHeader />

        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#333333", // fondo del header
            },
            headerTintColor: "#F4CE14", // color de la flecha de back
            headerTitleStyle: {
              fontSize: 18, // tamaño del título
            },
            headerShadowVisible: false, // quita línea inferior
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="login"
            options={{ headerShown: true, title: "Main" }}
          />
          <Stack.Screen
            name="subscribe"
            options={{ headerShown: true, title: "Main" }}
          />
          <Stack.Screen
            name="menu"
            options={{ headerShown: true, title: "Main" }}
          />
        </Stack>
      </View>

      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>

*/

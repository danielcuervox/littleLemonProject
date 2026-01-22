import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import WelcomeScreen from "@/components/WelcomeScreen";

/*<LittleLemonFooter />
<WelcomeScreen />


<MenuItems /> ---- este es el componente que muestra los items del menu normal

<MenuItemsSectionList/> este es el componente que muestra los items del menu en secciones

<WelcomeScreen /> -- este es el componente de bienvenida con el formulario de registro


// deben haber dos view una con el header y otra con el footer
<View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
        
        
</View>
<View style={styles.footerContainer}>
        
        <LittleLemonFooter />
</View>

*/

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <>
      <WelcomeScreen />
    </>
  );
}

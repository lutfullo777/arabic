import React from "react";
import { Dimensions } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/home";
import HeaderOption from "./src/components/homeHeader";
import Alphavet from "./src/screens/alphabet";
import Number from "./src/screens/number";

const Stack = createStackNavigator();

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);
  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);
  // if (!appIsReady) {
  //   return null;
  // }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        {/* <View
          onLayout={onLayoutRootView}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        > */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#507CA3" },
            }}
          >
            <Stack.Screen
              options={{
                title: "Arab tili",
                headerRight: () => {
                  return <HeaderOption navigation />;
                },
              }}
              name="home"
              component={Home}
            />
            <Stack.Screen
              options={{ title: "Alifbo" }}
              name="alphabet"
              component={Alphavet}
            />
            <Stack.Screen
              options={{ title: "Raqamlar" }}
              name="number"
              component={Number}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </View> */}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  KoHo_400Regular,
  KoHo_700Bold,
} from "@expo-google-fonts/koho";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";
import About from "./screens/About";
import Header from "./shared/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "koho-regular": KoHo_400Regular,
    "koho-bold": KoHo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              // header: () => <Header title={"Games Reviewer"} showIcon />,
              // headerTitle: "Home",
              title: "Home",
              headerStyle: {
                backgroundColor: "#ccc",
              },
              headerTintColor: "#333",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              gestureDirection: "horizontal",
            }}
          />
          <Stack.Screen
            name="reviewsDetails"
            component={ReviewDetails}
            options={{
              // headerTitle: () => (
              //   <Header title={"Games Details"} showIcon={false} />
              // ),
              title: "Game Review",
              headerStyle: {
                backgroundColor: "#ccc",
              },
              headerTintColor: "#333",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="about"
            component={About}
            options={{
              // headerTitle: () => <Header title={"About this App"} />,
              title: "About",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

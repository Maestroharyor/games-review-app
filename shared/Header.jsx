import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Header({ title, showIcon }) {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      {showIcon && (
        <MaterialIcons
          name="menu"
          size={25}
          color={"#333"}
          style={styles.icon}
        />
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={{ height: 20, width: 20, marginRight: 10 }}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100000",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 3,
  },
});

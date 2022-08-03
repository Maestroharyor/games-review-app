import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {},
  cardContent: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 12,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 6,
    elevation: 1,
    shadowColor: "#333",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
});

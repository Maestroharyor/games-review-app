import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../shared/Card";
import { globalStyles, images } from "../styles/global";

const ReviewDetails = ({ route, navigation }) => {
  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.title}>{item.title}</Text>
        <View
          style={{ borderTopWidth: 1, borderColor: "grey", paddingTop: 10 }}
        >
          <Text>{item.body}</Text>
          <Text>Game Rating:</Text>
          <Image source={images.ratings[item.rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  title: {
    fontFamily: "koho-bold",
    fontSize: 30,
    paddingBottom: 10,
  },
});

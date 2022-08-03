import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Modal,
  Keyboard,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Card from "../shared/Card";
import { globalStyles } from "../styles/global";
import ReviewForms from "./ReviewForms";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
    {
      title: "Irure id sit reprehenderit amet",
      rating: 4,
      body: "lorem ipsum",
      key: "4",
    },
    {
      title: "Call of Duty",
      rating: 5,
      body: "lorem ipsum",
      key: "5",
    },
    {
      title: "Gameboy",
      rating: 2,
      body: "lorem ipsum",
      key: "6",
    },
    {
      title: "God of war",
      rating: 2,
      body: "lorem ipsum",
      key: "7",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const addReview = (review) => {
    setReviews((prevReviews) => {
      return [...prevReviews, review];
    });
  };
  return (
    <>
      <StatusBar
        animated
        translucent
        barStyle={"dark-content"}
        backgroundColor="#fff"
      />
      <View style={globalStyles.container}>
        <Modal visible={openModal} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modal}>
              <MaterialIcons
                name="close"
                size={30}
                style={{
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#333",
                  borderStyle: "dashed",
                  marginTop: 20,
                  marginBottom: 10,
                }}
                onPress={() => setOpenModal(false)}
              />
              <View style={{ flex: 1, width: "100%" }}>
                <ReviewForms
                  addReview={addReview}
                  setOpenModal={setOpenModal}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <MaterialIcons
            name="add"
            size={30}
            style={{
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#333",
              borderStyle: "dashed",
            }}
            onPress={() => setOpenModal(true)}
          />
        </View>

        <View style={{ flex: 1, paddingBottom: 20 }}>
          <FlatList
            data={reviews}
            // style={styles.flatList}
            // disableScrollViewPanResponder={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("reviewsDetails", item)}
              >
                <Card>
                  <Text style={globalStyles.titleText}>{item.title}</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>

        <Button
          title="About"
          color={"#f4511e"}
          onPress={() => navigation.navigate("about")}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
  },
});

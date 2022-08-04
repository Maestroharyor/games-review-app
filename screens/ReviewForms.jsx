import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import Button from "../shared/Button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number between 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForms = ({ addReview, setOpenModal }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => {
          values.key = Math.random().toString();
          addReview(values);
          setOpenModal(false);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              placeholder="Review Title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              style={globalStyles.input}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>

            <TextInput
              multiline
              minHeight={80}
              placeholder="Review Body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              style={globalStyles.input}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>

            <TextInput
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType={"numeric"}
              style={globalStyles.input}
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>

            <Button
              text={"Add Review"}
              onPress={formikProps.handleSubmit}
            ></Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForms;

const styles = StyleSheet.create({});

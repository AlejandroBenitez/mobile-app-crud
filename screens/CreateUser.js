import React from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CreateUser = () => {
  return (
    <ScrollView>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name" />
      </View>

      <View style={styles.inputGroup}>
        <TextInput placeholder="Email" />
      </View>

      <View style={styles.inputGroup}>
        <TextInput placeholder="Phone" />
      </View>
      <View>
        <Button title="Save User" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginTop: 2,
    marginBottom: 15,
    marginLeft: 3,
    marginRight: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
});

export default CreateUser;

import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import firebase from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const addNewUser = async () => {
    if (state.name === "") {
      alert("Please, type a name");
    } else {
      const docRef = await addDoc(collection(firebase.db, "users"), {
        name: state.name,
        email: state.email,
        phone: state.phone,
      });
      console.log("Document written with ID: ", docRef.id);
      alert(
        `Usuario ${state.name} de ID: ${docRef.id} ha sido salvado exitosamente`
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View>
        <Button title="Save User" onPress={() => addNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
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

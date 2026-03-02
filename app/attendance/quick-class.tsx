import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function QuickClass() {
  const router = useRouter();

  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");
  const [time, setTime] = useState("");

  const handleCreate = () => {
    if (!subject || !room || !time) {
      Alert.alert("Please fill all fields");
      return;
    }

    Alert.alert("Class Created Successfully ✅");
    setSubject("");
    setRoom("");
    setTime("");
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={26} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Quick Class</Text>

      {/* Subject Input */}
      <TextInput
        placeholder="Enter Subject"
        value={subject}
        onChangeText={setSubject}
        style={styles.input}
      />

      {/* Room Input */}
      <TextInput
        placeholder="Enter Room Number"
        value={room}
        onChangeText={setRoom}
        style={styles.input}
      />

      {/* Time Input */}
      <TextInput
        placeholder="Enter Time (e.g. 10:30 AM)"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />

      {/* Create Button */}
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Class</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

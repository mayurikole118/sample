import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TimeTable() {
  const router = useRouter();

  const timetableData = [
    { time: "9:00 - 10:00", subject: "Mathematics", room: "101" },
    { time: "10:00 - 11:00", subject: "Physics", room: "202" },
    { time: "11:15 - 12:15", subject: "Chemistry", room: "305" },
    { time: "1:00 - 2:00", subject: "Computer Science", room: "Lab 1" },
    { time: "2:00 - 3:00", subject: "English", room: "110" },
  ];

  return (
    <View style={styles.container}>
      {/* 🔙 Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={26} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Time Table</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {timetableData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.room}>Room: {item.room}</Text>
          </View>
        ))}
      </ScrollView>
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
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
    marginBottom: 5,
  },
  subject: {
    fontSize: 16,
    fontWeight: "bold",
  },
  room: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
});

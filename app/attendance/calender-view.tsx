import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 🔙 Black Arrow Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={26} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Attendance Calendar</Text>

      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#2563EB",
          },
        }}
        theme={{
          todayTextColor: "#2563EB",
          arrowColor: "#2563EB",
        }}
      />

      {selectedDate ? (
        <Text style={styles.selectedText}>Selected Date: {selectedDate}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 16,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#1E293B",
  },
});

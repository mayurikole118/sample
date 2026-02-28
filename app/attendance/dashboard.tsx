import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AttendanceDashboard() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </Pressable>

        <Text style={styles.heading}>Attendance Dashboard</Text>

        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: insets.bottom + 120,
        }}
      >
        {/* Total Students */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="people-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Total Students</Text>
          </View>
          <Text style={styles.cardValue}>520</Text>
        </View>

        {/* Present Today */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={[styles.iconCircle, { backgroundColor: "#16a34a" }]}>
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color="#fff"
              />
            </View>
            <Text style={styles.cardTitle}>Present Today</Text>
          </View>
          <Text style={[styles.cardValue, { color: "#16a34a" }]}>480</Text>
        </View>

        {/* Absent Today */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={[styles.iconCircle, { backgroundColor: "#dc2626" }]}>
              <Ionicons name="close-circle-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Absent Today</Text>
          </View>
          <Text style={[styles.cardValue, { color: "#dc2626" }]}>40</Text>
        </View>

        {/* Attendance Percentage */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={[styles.iconCircle, { backgroundColor: "#0284c7" }]}>
              <Ionicons name="stats-chart-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Overall Attendance</Text>
          </View>
          <Text style={[styles.cardValue, { color: "#0284c7" }]}>92%</Text>
        </View>

        {/* Section Overview */}
        <Text style={styles.sectionTitle}>Class Overview</Text>

        <View style={styles.classCard}>
          <View style={styles.classRow}>
            <Text style={styles.className}>CSE - 3rd Year</Text>
            <Text style={styles.classPercent}>94%</Text>
          </View>

          <View style={styles.classRow}>
            <Text style={styles.className}>ECE - 2nd Year</Text>
            <Text style={styles.classPercent}>89%</Text>
          </View>

          <View style={styles.classRow}>
            <Text style={styles.className}>MECH - 4th Year</Text>
            <Text style={styles.classPercent}>91%</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  backButton: {
    padding: 4,
    marginTop: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginTop: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 18,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6366f1",
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "500",
  },

  cardValue: {
    fontSize: 26,
    fontWeight: "700",
    color: "#6366f1",
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0284c7",
    textAlign: "center",
    marginVertical: 20,
  },

  classCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    elevation: 3,
    gap: 14,
  },

  classRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  className: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
  },

  classPercent: {
    fontSize: 15,
    fontWeight: "600",
    color: "#16a34a",
  },
});

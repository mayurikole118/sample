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

export default function LocationDashboard() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </Pressable>

        <Text style={styles.heading}>Location Dashboard</Text>

        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: insets.bottom + 120,
        }}
      >
        {/* ACTIVE CHECKINS */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="people-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Active Check-ins</Text>
          </View>
          <Text style={styles.cardValue}>42</Text>
        </View>

        {/* TODAY VISITS */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="eye-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Today’s Visits</Text>
          </View>
          <Text style={styles.cardValue}>128</Text>
        </View>

        {/* OVERDUE */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="alarm-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Overdue Check-outs</Text>
          </View>
          <Text style={styles.cardValue}>5</Text>
        </View>

        {/* LOCATION OVERVIEW */}
        <Text style={styles.sectionTitle}>Location Overview</Text>

        <View style={styles.locationCard}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="location-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Main Entrance</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={[styles.statBox, styles.maleBox]}>
              <Ionicons name="male-outline" size={16} color="#2563eb" />
              <Text style={styles.statText}>
                Male: <Text style={styles.statValue}>15</Text>
              </Text>
            </View>

            <View style={[styles.statBox, styles.femaleBox]}>
              <Ionicons name="female-outline" size={16} color="#ec4899" />
              <Text style={styles.statText}>
                Female: <Text style={styles.statValue}>9</Text>
              </Text>
            </View>

            <View style={[styles.statBox, styles.avgBox]}>
              <Ionicons name="stats-chart-outline" size={16} color="#059669" />
              <Text style={styles.statText}>
                Avg Daily: <Text style={styles.statValue}>80</Text>
              </Text>
            </View>
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

  /* Header Style Same as Reference */
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
    backgroundColor: "#3b82f6",
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
    color: "#0ea5e9",
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0284c7",
    textAlign: "center",
    marginVertical: 20,
  },

  locationCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  statsContainer: {
    marginTop: 18,
    gap: 12,
  },

  statBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },

  maleBox: {
    backgroundColor: "#e0f2fe",
  },

  femaleBox: {
    backgroundColor: "#fce7f3",
  },

  avgBox: {
    backgroundColor: "#d1fae5",
  },

  statText: {
    fontSize: 14,
    color: "#111827",
  },

  statValue: {
    fontWeight: "700",
  },
});

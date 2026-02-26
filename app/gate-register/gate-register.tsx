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

type HistoryItem = {
  id: string;
  place: string;
  type: "enter" | "exit";
  time: string;
  date: string;
};

const historyData: HistoryItem[] = [
  {
    id: "1",
    place: "VTU Main Library",
    type: "enter",
    time: "04:41 PM",
    date: "31/01/2026",
  },
  {
    id: "2",
    place: "Digital Library",
    type: "exit",
    time: "04:41 PM",
    date: "31/01/2026",
  },
  {
    id: "3",
    place: "Digital Library",
    type: "enter",
    time: "04:41 PM",
    date: "31/01/2026",
  },
  {
    id: "4",
    place: "VTU Main Library",
    type: "exit",
    time: "04:41 PM",
    date: "31/01/2026",
  },
  {
    id: "5",
    place: "VTU Main Library",
    type: "enter",
    time: "04:40 PM",
    date: "31/01/2026",
  },
  {
    id: "6",
    place: "VTU Main Library",
    type: "exit",
    time: "11:23 AM",
    date: "31/01/2026",
  },
  {
    id: "7",
    place: "VTU Main Library",
    type: "enter",
    time: "11:22 AM",
    date: "31/01/2026",
  },
];

export default function InOutHistoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </Pressable>

        <Text style={styles.title}>History</Text>

        {/* Spacer for perfect center alignment */}
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {historyData.map((item, index) => (
          <View key={item.id} style={styles.row}>
            {/* Timeline */}
            <View style={styles.timelineContainer}>
              {index !== historyData.length - 1 && (
                <View style={styles.verticalLine} />
              )}

              <View
                style={[
                  styles.iconCircle,
                  item.type === "enter"
                    ? styles.enterCircle
                    : styles.exitCircle,
                ]}
              >
                <Ionicons
                  name={item.type === "enter" ? "arrow-forward" : "arrow-back"}
                  size={16}
                  color={item.type === "enter" ? "#16a34a" : "#dc2626"}
                />
              </View>
            </View>

            {/* Card */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.place}>{item.place}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={styles.timeText}>
                {item.type === "enter" ? "Entered" : "Exited"} at {item.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 16,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  backButton: {
    width: 24,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
  },

  /* TIMELINE */
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  timelineContainer: {
    width: 40,
    alignItems: "center",
    position: "relative",
  },
  verticalLine: {
    position: "absolute",
    top: 30,
    width: 2,
    height: "100%",
    backgroundColor: "#d1d5db",
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  enterCircle: {
    backgroundColor: "#dcfce7",
  },
  exitCircle: {
    backgroundColor: "#fee2e2",
  },

  /* CARD */
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  place: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#6b7280",
  },
  timeText: {
    fontSize: 14,
    color: "#6b7280",
  },
});

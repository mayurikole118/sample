import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function TimerScreen() {
  const router = useRouter();

  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<"timer" | "clock" | "stopwatch">(
    "timer",
  );

  const increase = (type: "hours" | "minutes") => {
    if (type === "hours") {
      setHours(String(Number(hours) + 1));
    } else {
      setMinutes(String(Number(minutes) + 1));
    }
  };

  const decrease = (type: "hours" | "minutes") => {
    if (type === "hours" && Number(hours) > 0) {
      setHours(String(Number(hours) - 1));
    } else if (type === "minutes" && Number(minutes) > 0) {
      setMinutes(String(Number(minutes) - 1));
    }
  };

  const handleStart = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ✅ HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </Pressable>

        <Text style={styles.title}>The Ultimate Timer</Text>

        {/* Empty view for perfect center alignment */}
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Timer Controls</Text>
        <Text style={styles.subtitle}>Choose a timing functionality</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <Pressable
            style={[
              styles.tabButton,
              activeTab === "timer" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("timer")}
          >
            <Ionicons name="timer-outline" size={16} />
            <Text style={styles.tabText}> Timer</Text>
          </Pressable>

          <Pressable
            style={[
              styles.tabButton,
              activeTab === "clock" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("clock")}
          >
            <Ionicons name="time-outline" size={16} />
            <Text style={styles.tabText}> Clock</Text>
          </Pressable>

          <Pressable
            style={[
              styles.tabButton,
              activeTab === "stopwatch" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("stopwatch")}
          >
            <Ionicons name="stopwatch-outline" size={16} />
            <Text style={styles.tabText}> Stopwatch</Text>
          </Pressable>
        </View>

        {/* Time Inputs */}
        <View style={styles.timeRow}>
          <View style={styles.timeBlock}>
            <Text style={styles.label}>Hours</Text>
            <View style={styles.inputRow}>
              <Pressable
                style={styles.smallBtn}
                onPress={() => decrease("hours")}
              >
                <Text>-</Text>
              </Pressable>

              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={hours}
                onChangeText={setHours}
              />

              <Pressable
                style={styles.smallBtn}
                onPress={() => increase("hours")}
              >
                <Text>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.timeBlock}>
            <Text style={styles.label}>Minutes</Text>
            <View style={styles.inputRow}>
              <Pressable
                style={styles.smallBtn}
                onPress={() => decrease("minutes")}
              >
                <Text>-</Text>
              </Pressable>

              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={minutes}
                onChangeText={setMinutes}
              />

              <Pressable
                style={styles.smallBtn}
                onPress={() => increase("minutes")}
              >
                <Text>+</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Start Button */}
        <Pressable
          style={[styles.startButton, loading && { opacity: 0.7 }]}
          onPress={handleStart}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Ionicons name="timer-outline" size={18} color="#fff" />
              <Text style={styles.startText}> Start Timer</Text>
            </>
          )}
        </Pressable>

        <Text style={styles.bottomText}>
          Choose a time and select your desired timer function
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
  },

  /* ✅ HEADER STYLE */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    width: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    color: "#6b7280",
    marginBottom: 12,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: "#e5e7eb",
  },
  tabText: {
    fontSize: 14,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  timeBlock: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    marginBottom: 6,
    fontWeight: "500",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
    flex: 1,
    marginHorizontal: 8,
  },
  smallBtn: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 8,
    borderRadius: 6,
  },
  startButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  startText: {
    color: "#fff",
    fontWeight: "600",
  },
  bottomText: {
    color: "#6b7280",
    fontSize: 13,
  },
});

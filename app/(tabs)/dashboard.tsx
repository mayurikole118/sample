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

export default function KohaDashboard() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </Pressable>

        <Text style={styles.heading}>Koha Dashboard</Text>

        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: insets.bottom + 120,
        }}
      >
        {/* Total Books */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="library-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Total Books</Text>
          </View>
          <Text style={styles.cardValue}>12,450</Text>
        </View>

        {/* Active Members */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="people-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Active Members</Text>
          </View>
          <Text style={styles.cardValue}>3,210</Text>
        </View>

        {/* Books Issued */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="book-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Books Issued Today</Text>
          </View>
          <Text style={styles.cardValue}>85</Text>
        </View>

        {/* Overdue Books */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <Ionicons name="alert-circle-outline" size={20} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>Overdue Books</Text>
          </View>
          <Text style={styles.cardValue}>27</Text>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionContainer}>
          <Pressable style={styles.actionCard}>
            <Ionicons name="add-circle-outline" size={22} color="#0284c7" />
            <Text style={styles.actionText}>Add Book</Text>
          </Pressable>

          <Pressable style={styles.actionCard}>
            <Ionicons name="search-outline" size={22} color="#0284c7" />
            <Text style={styles.actionText}>Search Books</Text>
          </Pressable>

          <Pressable style={styles.actionCard}>
            <Ionicons name="repeat-outline" size={22} color="#0284c7" />
            <Text style={styles.actionText}>Issue / Return</Text>
          </Pressable>
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
    backgroundColor: "#0284c7",
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
    color: "#0284c7",
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0284c7",
    textAlign: "center",
    marginVertical: 20,
  },

  actionContainer: {
    gap: 12,
  },

  actionCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    elevation: 2,
  },

  actionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
  },
});

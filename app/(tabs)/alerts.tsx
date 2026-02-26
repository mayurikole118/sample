import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type AlertItem = {
  id: string;
  type: "checkout" | "post";
  title: string;
  subtitle: string;
  date: string;
};

const DATA: AlertItem[] = [
  {
    id: "1",
    type: "checkout",
    title: "Barcode: 2025-0017 Checked Out (CHECKOUT)",
    subtitle: "Due: 05/26/2025\nDue Date: 05/26/2025 | Unknown",
    date: "",
  },
  {
    id: "2",
    type: "checkout",
    title: "Barcode: 2025-0018 Checked Out (CHECKOUT)",
    subtitle: "Due: 05/26/2025\nDue Date: 05/26/2025 | Unknown",
    date: "",
  },
  {
    id: "3",
    type: "checkout",
    title: "Barcode: 2025-0016 Checked Out (CHECKOUT)",
    subtitle: "Due: 05/26/2025\nDue Date: 05/26/2025 | Unknown",
    date: "",
  },
  {
    id: "4",
    type: "checkout",
    title: "Barcode: 2025-0015 Checked Out (CHECKOUT)",
    subtitle: "Due: 05/26/2025\nDue Date: 05/26/2025 | Unknown",
    date: "",
  },
  {
    id: "5",
    type: "post",
    title: "Omkar Kakeru published post on Computer Science",
    subtitle: "10 months ago",
    date: "",
  },
];

export default function AlertsScreen() {
  const renderItem = ({ item }: { item: AlertItem }) => {
    return (
      <View style={styles.row}>
        {/* Timeline Section */}
        <View style={styles.timeline}>
          <View style={styles.iconWrapper}>
            {item.type === "checkout" ? (
              <Ionicons name="book-outline" size={20} color="#3B82F6" />
            ) : (
              <MaterialIcons name="person-outline" size={20} color="#6B7280" />
            )}
          </View>
          <View style={styles.verticalLine} />
        </View>

        {/* Content */}
        <Pressable style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your College Name</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.pageTitle}>Notifications</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    height: 50,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#111827",
  },
  row: {
    flexDirection: "row",
    marginBottom: 24,
  },
  timeline: {
    width: 40,
    alignItems: "center",
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  verticalLine: {
    position: "absolute",
    top: 36,
    width: 2,
    height: "100%",
    backgroundColor: "#D1D5DB",
  },
  content: {
    flex: 1,
    paddingLeft: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
    lineHeight: 18,
  },
});

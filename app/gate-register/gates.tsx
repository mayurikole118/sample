import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function GatesScreen() {
  const router = useRouter();
  const [accessTypes, setAccessTypes] = useState(["ALL"]);

  const removeAccess = (type: string) => {
    setAccessTypes(accessTypes.filter((item) => item !== type));
  };

  const tableData = [
    { id: 5, name: "Digital Library", code: "VTU2", desc: "" },
    { id: 4, name: "VTU Main Library", code: "VTU1", desc: "" },
    { id: 3, name: "Lib Room 2", code: "LB02", desc: "Second Room" },
    { id: 2, name: "Reading Room", code: "RM01", desc: "" },
    { id: 1, name: "Main Library", code: "MN01", desc: "Main Library" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={styles.headerBack}
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={24} color="#111827" />
          </Pressable>
          <Text style={styles.headerTitle}>Gates</Text>
        </View>

        {/* FORM CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.subtitle}>
            Setup location for your organization
          </Text>

          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Name" />

          <Text style={styles.label}>Code</Text>
          <TextInput style={styles.input} placeholder="Code" />

          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} placeholder="Description" />

          <Text style={styles.label}>Parent Location</Text>
          <Pressable style={styles.selectBox}>
            <Text>Select a location</Text>
            <Ionicons name="chevron-down" size={18} />
          </Pressable>

          <Text style={styles.label}>Checkout Time</Text>
          <Pressable style={styles.selectBox}>
            <Text style={{ color: "#6B7280" }}>--:--</Text>
            <Ionicons name="time-outline" size={18} />
          </Pressable>

          <Text style={styles.label}>Access Types</Text>
          <View style={styles.accessContainer}>
            {accessTypes.map((type) => (
              <View key={type} style={styles.chip}>
                <Text style={styles.chipText}>{type}</Text>
                <Pressable onPress={() => removeAccess(type)}>
                  <Ionicons name="close" size={14} color="#fff" />
                </Pressable>
              </View>
            ))}
            <Text style={styles.accessPlaceholder}>Select Access Types...</Text>
          </View>

          <Pressable style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
        </View>

        {/* LOCATION MANAGEMENT */}
        <View style={styles.managementCard}>
          <Text style={styles.managementTitle}>Location Management</Text>
          <Text style={styles.managementSubtitle}>
            View, edit, and manage Location details efficiently.
          </Text>

          <TextInput style={styles.searchInput} placeholder="Search..." />

          <View style={styles.filterRow}>
            <Pressable style={styles.filterBtn}>
              <Ionicons name="add-circle-outline" size={16} />
              <Text style={styles.filterText}> Name</Text>
            </Pressable>

            <Pressable style={styles.filterBtn}>
              <Ionicons name="add-circle-outline" size={16} />
              <Text style={styles.filterText}> Parent Location</Text>
            </Pressable>
          </View>

          <View style={styles.tableHeader}>
            <Text style={[styles.th, { flex: 0.5 }]}>ID</Text>
            <Text style={[styles.th, { flex: 1.5 }]}>Name</Text>
            <Ionicons name="swap-vertical" size={16} />
            <Text style={[styles.th, { flex: 1 }]}>Code</Text>
            <Text style={[styles.th, { flex: 1 }]}>Description</Text>
          </View>

          {tableData.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={[styles.td, { flex: 0.5 }]}>{item.id}</Text>
              <Text style={[styles.td, { flex: 1.5 }]}>{item.name}</Text>
              <Text style={[styles.td, { flex: 1 }]}>{item.code}</Text>
              <Text style={[styles.td, { flex: 1 }]}>{item.desc}</Text>
            </View>
          ))}

          <View style={styles.pagination}>
            <Pressable style={styles.pageBtn}>
              <Ionicons name="play-skip-back" size={16} />
            </Pressable>
            <Pressable style={styles.pageBtn}>
              <Ionicons name="chevron-back" size={16} />
            </Pressable>
            <Pressable style={styles.pageBtn}>
              <Ionicons name="chevron-forward" size={16} />
            </Pressable>
            <Pressable style={styles.pageBtn}>
              <Ionicons name="play-skip-forward" size={16} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F3F4F6" },
  container: { padding: 20 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  headerBack: {
    paddingRight: 10,
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      },
      android: { elevation: 3 },
    }),
  },

  title: { fontSize: 18, fontWeight: "600" },
  subtitle: { color: "#6B7280", marginBottom: 10 },
  label: { marginTop: 14, marginBottom: 6, fontWeight: "500" },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#F9FAFB",
  },

  selectBox: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
  },

  accessContainer: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
  },

  chipText: { color: "#fff", marginRight: 6, fontSize: 12 },
  accessPlaceholder: { color: "#6B7280", flex: 1 },

  submitButton: {
    marginTop: 20,
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  submitText: { color: "#fff", fontWeight: "600" },

  managementCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 40,
  },

  managementTitle: { fontSize: 18, fontWeight: "600" },
  managementSubtitle: { color: "#6B7280", marginBottom: 15 },

  searchInput: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F9FAFB",
  },

  filterRow: { flexDirection: "row", marginBottom: 10 },

  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#D1D5DB",
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },

  filterText: { marginLeft: 4 },

  tableHeader: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },

  th: { fontWeight: "600", fontSize: 13 },

  tableRow: {
    flexDirection: "row",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },

  td: { fontSize: 13 },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  pageBtn: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 5,
  },
});

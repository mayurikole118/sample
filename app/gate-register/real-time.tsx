import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Your College Name</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity>
          <Text style={styles.tabText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.tabText}>Branches</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.tabText}>General</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
        {/* Header Row */}
        <View style={styles.row}>
          <View style={styles.firstColumn} />
          {["S", "CPL", "Male", "Female", "Inside", "Total"].map(
            (item, index) => (
              <View key={index} style={styles.verticalHeaderContainer}>
                <Text style={styles.verticalHeader}>{item}</Text>
              </View>
            ),
          )}
        </View>

        {/* Row 1 */}
        <View style={styles.row}>
          <Text style={styles.firstColumn}>VTU Main Library</Text>
          <Text style={styles.cell}>6</Text>
          <Text style={styles.cell}>6</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <Text style={styles.firstColumn}>Digital Library</Text>
          <Text style={styles.cell}>4</Text>
          <Text style={styles.cell}>4</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },

  tabText: {
    fontSize: 16,
    color: "#000",
  },

  tableContainer: {
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  firstColumn: {
    width: 150,
    fontSize: 14,
  },

  cell: {
    width: 50,
    textAlign: "center",
  },

  verticalHeaderContainer: {
    width: 50,
    height: 80,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  verticalHeader: {
    transform: [{ rotate: "-90deg" }],
    fontSize: 12,
    fontWeight: "bold",
  },
});

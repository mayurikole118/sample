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

export default function KohaUpdates() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </Pressable>

        <Text style={styles.heading}>Koha Updates</Text>

        <View style={{ width: 22 }} />
        {/* Empty view to balance center alignment */}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <UpdateItem
          barcode="2025-0019"
          action="Checked Out (CHECKOUT)"
          due="08/05/2025"
          extra="Due Date: 08/05/2025 | Unknown"
        />

        <UpdateItem
          barcode="2025-0020"
          action="Checked Out (CHECKOUT)"
          due="05/26/2025"
          extra="Due Date: 05/26/2025 | Unknown"
        />

        <UpdateItem
          barcode="2025-0002"
          action="Check-In (CHECKIN)"
          due="Checked in on:"
          extra="Date: N/A | Code Complete"
        />

        <UpdateItem
          barcode="2025-0016"
          action="Check-In (CHECKIN)"
          due="Checked in on:"
          extra="Date: N/A | Algorithms"
        />

        <UpdateItem
          barcode="2025-0017"
          action="Check-In (CHECKIN)"
          due="Checked in on: February 19th, 2025"
          extra="Date: 02/19/2025 | Algorithms"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- UPDATE ITEM COMPONENT ---------------- */

const UpdateItem = ({
  barcode,
  action,
  due,
  extra,
}: {
  barcode: string;
  action: string;
  due: string;
  extra: string;
}) => {
  const isCheckout = action.includes("CHECKOUT");

  return (
    <View style={styles.itemContainer}>
      <View style={styles.timelineContainer}>
        <View style={styles.iconCircle}>
          <Ionicons name="book-outline" size={18} color="#3b82f6" />
        </View>
        <View style={styles.verticalLine} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Barcode: {barcode}{" "}
          <Text
            style={[
              styles.actionText,
              isCheckout ? styles.checkout : styles.checkin,
            ]}
          >
            {action}
          </Text>
        </Text>

        <Text style={styles.subText}>{due}</Text>
        <Text style={styles.extraText}>{extra}</Text>
      </View>
    </View>
  );
};

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 20,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 35,
  },

  backButton: {
    padding: 5,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },

  itemContainer: {
    flexDirection: "row",
    marginBottom: 25,
  },

  timelineContainer: {
    alignItems: "center",
    marginRight: 12,
  },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e0f2fe",
    justifyContent: "center",
    alignItems: "center",
  },

  verticalLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#d1d5db",
    marginTop: 4,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },

  actionText: {
    fontWeight: "700",
  },

  checkout: {
    color: "#ef4444",
  },

  checkin: {
    color: "#10b981",
  },

  subText: {
    fontSize: 13,
    color: "#374151",
  },

  extraText: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
});

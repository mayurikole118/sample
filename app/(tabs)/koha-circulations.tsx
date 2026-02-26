import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  Animated,
  Platform,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function KohaCirculations() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </Pressable>

        <Text style={styles.heading}>My Circulations</Text>

        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 120,
        }}
      >
        <View style={styles.contentWrapper}>
          {/* Summary Cards */}
          <View style={styles.summaryRow}>
            <HoverCard>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryTitle}>Currently Checked Out</Text>
                <Text style={styles.summaryCount}>
                  2 <Text style={styles.summaryItems}>items</Text>
                </Text>
              </View>
            </HoverCard>

            <HoverCard>
              <View style={[styles.summaryCard, styles.summaryCardRight]}>
                <Text style={styles.summaryTitle}>Previous Returns</Text>
                <Text style={styles.summaryCount}>
                  6 <Text style={styles.summaryItems}>items</Text>
                </Text>
              </View>
            </HoverCard>
          </View>

          <Text style={styles.sectionTitle}>Currently Checked Out</Text>

          <View style={styles.cardRow}>
            <HoverCard>
              <View style={styles.bookCard}>
                <Text style={styles.bookTitle}>
                  Artificial Intelligence: A Modern...
                </Text>
                <Text style={styles.bookAuthor}>By Russell, Stuart J.</Text>
                <Text style={styles.barcode}>Barcode: 2025-0030</Text>

                <View style={styles.dueBox}>
                  <Text style={styles.dueText}>Due: 14 Oct 2025</Text>
                  <Text style={styles.overdueText}>Overdue by 133 days</Text>
                </View>
              </View>
            </HoverCard>

            <HoverCard>
              <View style={styles.bookCard}>
                <Text style={styles.bookTitle}>
                  The Art of Computer Programming
                </Text>
                <Text style={styles.bookAuthor}>By Knuth, Donald E.</Text>
                <Text style={styles.barcode}>Barcode: 2025-0019</Text>

                <View style={styles.dueBox}>
                  <Text style={styles.dueText}>Due: 06 Aug 2025</Text>
                  <Text style={styles.overdueText}>Overdue by 202 days</Text>
                </View>
              </View>
            </HoverCard>
          </View>

          <Text style={styles.sectionTitle}>Return History</Text>

          <View style={styles.cardRow}>
            <HoverCard>
              <View style={styles.historyCard}>
                <Text style={styles.bookTitle}>
                  The Art of Computer Programming
                </Text>
                <Text style={styles.bookAuthor}>By Knuth, Donald E.</Text>
                <Text style={styles.barcode}>Barcode: 2025-0020</Text>

                <View style={styles.returnBox}>
                  <Text style={styles.returnText}>Returned on:</Text>
                  <Text style={styles.returnDate}>06 Aug 2025 04:37 PM</Text>
                </View>
              </View>
            </HoverCard>

            <HoverCard>
              <View style={styles.historyCard}>
                <Text style={styles.bookTitle}>Algorithms</Text>
                <Text style={styles.bookAuthor}>By Sedgewick, Robert.</Text>
                <Text style={styles.barcode}>Barcode: 2025-0017</Text>

                <View style={styles.returnBox}>
                  <Text style={styles.returnText}>Returned on:</Text>
                  <Text style={styles.returnDate}>12 May 2025 10:54 AM</Text>
                </View>
              </View>
            </HoverCard>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- HOVER CARD ---------------- */

const HoverCard = ({ children }: any) => {
  const { width } = useWindowDimensions();

  const CARD_WIDTH =
    width >= 1024 ? 320 : width >= 768 ? width * 0.42 : width * 0.9;

  const scale = useRef(new Animated.Value(1)).current;

  const handleHoverIn = () => {
    if (Platform.OS === "web") {
      Animated.spring(scale, {
        toValue: 1.03,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleHoverOut = () => {
    if (Platform.OS === "web") {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Pressable
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      style={{ marginBottom: 20 }}
    >
      <Animated.View
        style={{
          width: CARD_WIDTH,
          transform: [{ scale }],
        }}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  backButton: {
    padding: 5,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },

  contentWrapper: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 20,
  },

  summaryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginBottom: 10,
  },

  summaryCard: {
    backgroundColor: "#e6f4ff",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },

  summaryCardRight: {
    backgroundColor: "#d1fae5",
  },

  summaryTitle: {
    fontSize: 13,
    fontWeight: "600",
  },

  summaryCount: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 6,
  },

  summaryItems: {
    fontSize: 14,
    fontWeight: "500",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 14,
  },

  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },

  bookCard: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 14,
    borderTopWidth: 4,
    borderTopColor: "#ef4444",
    elevation: 3,
  },

  historyCard: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 14,
    borderTopWidth: 4,
    borderTopColor: "#9ca3af",
    elevation: 2,
  },

  bookTitle: {
    fontSize: 14,
    fontWeight: "700",
  },

  bookAuthor: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },

  barcode: {
    fontSize: 11,
    color: "#6b7280",
    marginVertical: 6,
  },

  dueBox: {
    backgroundColor: "#fee2e2",
    padding: 6,
    borderRadius: 6,
    marginTop: 6,
  },

  dueText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#dc2626",
  },

  overdueText: {
    fontSize: 11,
    color: "#dc2626",
  },

  returnBox: {
    backgroundColor: "#f3f4f6",
    padding: 6,
    borderRadius: 6,
    marginTop: 6,
  },

  returnText: {
    fontSize: 11,
    color: "#6b7280",
  },

  returnDate: {
    fontSize: 11,
    fontWeight: "600",
  },
});

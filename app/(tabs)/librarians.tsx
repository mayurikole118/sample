import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Animated,
  ImageBackground,
  Pressable,
} from "react-native";
import { rings } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { SvgXml } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

/* ----- RING COMPONENT ----- */
type RingProps = {
  label: string;
};

const Ring = ({ label }: RingProps) => {
  const spin = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    spin.setValue(0);
    Animated.timing(spin, {
      toValue: 2,
      duration: 6000,
      useNativeDriver: true,
    }).start();
  };

  const rotate = spin.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["0deg", "360deg", "720deg"],
  });

  const avatar = createAvatar(rings, {
    seed: label,
    size: 50,
    backgroundColor: ["ffffff00"],
  }).toString();

  return (
    <Pressable onPress={handlePress}>
      <View style={ringStyles.ringWrapper}>
        <Animated.View
          style={[{ transform: [{ rotate }] }, ringStyles.avatarOutline]}
        >
          <SvgXml xml={avatar} width={60} height={60} />
        </Animated.View>
      </View>
    </Pressable>
  );
};

/* ----- MAIN PAGE ----- */
export default function Librarians() {
  const [activeTab, setActiveTab] = useState("Feed");
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </Pressable>

          <Text style={styles.headerTitle}>Your College Name</Text>
        </View>

        {/* COVER */}
        <ImageBackground
          source={require("../../assets/images/geo4.png")}
          style={styles.cover}
          imageStyle={styles.coverImage}
        >
          <View style={styles.coverOverlay} />
        </ImageBackground>

        {/* PROFILE RING */}
        <View style={styles.profileRow}>
          <Ring label="L" />
        </View>

        {/* INFO */}
        <View style={styles.info}>
          <Text style={styles.title}>Librarians</Text>
          <Text style={styles.username}>@librarians</Text>
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          {["Feed", "Polls", "Members", "Activity", "About"].map((tab) => (
            <Pressable key={tab} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* TAB CONTENT */}
        {activeTab === "Feed" && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              What’s your favorite tech stack for hackathons?
            </Text>
            <Text style={styles.cardSub}>By Omkar Kakeru · 10 months ago</Text>

            <View style={styles.optionActive}>
              <Text style={styles.optionText}>✓ MERN</Text>
            </View>

            <View style={styles.option}>
              <Text style={styles.optionText}>Flutter & Firebase</Text>
            </View>

            <View style={styles.option}>
              <Text style={styles.optionText}>Python & Django</Text>
            </View>

            <View style={styles.option}>
              <Text style={styles.optionText}>Java & Spring</Text>
            </View>
          </View>
        )}

        {activeTab === "Polls" && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Polls Section</Text>
          </View>
        )}

        {activeTab === "Members" && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Members Section</Text>
          </View>
        )}

        {activeTab === "Activity" && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Activity Section</Text>
          </View>
        )}

        {activeTab === "About" && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>About Section</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

/* ----- STYLES ----- */

const ringStyles = StyleSheet.create({
  ringWrapper: {
    alignItems: "flex-start",
    marginLeft: 20,
  },
  avatarOutline: {
    borderWidth: 3,
    borderColor: "#3b82f6",
    borderRadius: 40,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0,
    borderColor: "#eee",
    marginTop: 20,
  },

  backButton: {
    position: "absolute",
    left: 15,
    height: "100%",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  cover: {
    height: 250,
    width: "100%",
  },

  coverImage: {
    resizeMode: "cover",
  },

  coverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(139, 92, 246, 0.3)",
  },

  profileRow: {
    marginTop: -40,
    paddingLeft: 20,
  },

  info: {
    paddingHorizontal: 20,
    marginTop: -5,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  username: {
    color: "#666",
  },

  tabs: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  tab: {
    marginRight: 18,
    paddingBottom: 8,
    color: "#666",
  },

  activeTab: {
    color: "#2563eb",
    borderBottomWidth: 2,
    borderColor: "#2563eb",
    fontWeight: "600",
  },

  card: {
    margin: 20,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#fff",
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  cardSub: {
    color: "#777",
    marginVertical: 6,
  },

  option: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
  },

  optionActive: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#c084fc",
    marginTop: 10,
  },

  optionText: {
    fontWeight: "500",
  },
});

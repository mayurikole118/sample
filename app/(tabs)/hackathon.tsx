import React, { useRef, useState, useMemo } from "react";
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

  // 🔥 Optimized (prevents re-generation)
  const avatar = useMemo(
    () =>
      createAvatar(rings, {
        seed: label,
        size: 50,
        backgroundColor: ["ffffff00"],
      }).toString(),
    [label],
  );

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
export default function CS() {
  const [activeTab, setActiveTab] = useState("Feed");
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </Pressable>

          <Text style={styles.headerTitle}>Your College Name</Text>
        </View>

        {/* COVER IMAGE */}
        <ImageBackground
          source={require("../../assets/images/geo2.png")}
          style={styles.cover}
          imageStyle={styles.coverImage}
        >
          <View style={styles.coverOverlay} />
        </ImageBackground>

        {/* PROFILE RING */}
        <View style={styles.profileRow}>
          <Ring label="CS" />
        </View>

        {/* INFO */}
        <View style={styles.info}>
          <Text style={styles.title}>Hackathon</Text>
          <Text style={styles.username}>@cs</Text>
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
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{activeTab}</Text>
          <Text>
            {activeTab === "Feed" && "Welcome to the Hackathon Feed!"}
            {activeTab === "Polls" && "Polls will appear here."}
            {activeTab === "Members" && "Team members list."}
            {activeTab === "Activity" && "Recent activity will show here."}
            {activeTab === "About" && "Information about this page."}
          </Text>
        </View>
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
    marginTop: 20, // 👈 ADD THIS
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
    backgroundColor: "rgba(59, 130, 246, 0.35)",
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
    marginBottom: 6,
  },
});

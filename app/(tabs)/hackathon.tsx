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
const Ring = ({ label }: { label: string }) => {
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
      <View style={styles.ringWrapper}>
        <Animated.View
          style={[{ transform: [{ rotate }] }, styles.avatarOutline]}
        >
          <SvgXml xml={avatar} width={60} height={60} />
        </Animated.View>
      </View>
    </Pressable>
  );
};

/* ----- MAIN PAGE ----- */
export default function Hackathon() {
  const [activeTab, setActiveTab] = useState("Feed");
  const router = useRouter();

  const tabContent: any = {
    Feed: {
      title: "24 Hour Coding Challenge",
      sub: "By Tech Club · 20 July 2025",
      options: [
        "AI Based Solutions",
        "Web & App Innovation",
        "Blockchain Ideas",
        "Open Innovation",
      ],
    },
    Polls: {
      title: "Vote Your Preferred Domain",
      sub: "Community Poll · 18 July 2025",
      options: ["Cyber Security", "FinTech", "HealthTech", "EdTech"],
    },
    Members: {
      title: "Core Organizing Team",
      sub: "Hackathon Committee 2025",
      options: [
        "Event Lead – Aditi",
        "Tech Lead – Rohan",
        "Design Lead – Sneha",
        "Marketing – Arjun",
      ],
    },
    Activity: {
      title: "Recent Activities",
      sub: "Latest Updates",
      options: [
        "Registrations Opened",
        "Mentor Announced",
        "Problem Statements Released",
        "Sponsors Confirmed",
      ],
    },
    About: {
      title: "About Hackathon 2025",
      sub: "Build. Innovate. Compete.",
      options: [
        "24 Hour Coding Marathon",
        "Team Participation (2-4 Members)",
        "Exciting Cash Prizes",
        "Certificates for All",
      ],
    },
  };

  const data = tabContent[activeTab];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </Pressable>
          <Text style={styles.headerTitle}>Your College Name</Text>
        </View>

        {/* COVER */}
        <ImageBackground
          source={require("../../assets/images/geo2.png")}
          style={styles.cover}
          imageStyle={styles.coverImage}
        >
          <View style={styles.coverOverlay} />
        </ImageBackground>

        {/* PROFILE RING */}
        <View style={styles.profileRow}>
          <Ring label="Hackathon" />
        </View>

        {/* INFO */}
        <View style={styles.info}>
          <Text style={styles.title}>Annual Tech Hackathon 2025</Text>
          <Text style={styles.username}>@hackathon</Text>
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

        {/* CARD CONTENT */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{data.title}</Text>
          <Text style={styles.cardSub}>{data.sub}</Text>

          {data.options.map((item: string, index: number) => (
            <View
              key={index}
              style={index === 0 ? styles.optionActive : styles.option}
            >
              <Text style={styles.optionText}>
                {index === 0 ? "✓ " : ""}
                {item}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ----- STYLES ----- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "rgba(34, 197, 94, 0.18)", // softer green
  },

  ringWrapper: {
    alignItems: "flex-start",
    marginLeft: 20,
  },

  avatarOutline: {
    borderWidth: 3,
    borderColor: "#3b82f6", // green border
    borderRadius: 40,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
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
    color: "#16a34a",
    borderBottomWidth: 2,
    borderColor: "#16a34a",
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
    backgroundColor: "#bbf7d0", // light green
    marginTop: 10,
  },

  optionText: {
    fontWeight: "500",
  },
});

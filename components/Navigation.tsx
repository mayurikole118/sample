import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const Tab = ({ icon, label, route }: any) => {
    const active = pathname === route;
    const color = active ? "#2563eb" : "#6b7280";

    return (
      <Pressable style={styles.tab} onPress={() => router.push(route)}>
        <Ionicons name={icon} size={22} color={color} />
        <Text style={[styles.label, active && styles.active]}>{label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.nav}>
      <Tab icon="home-outline" label="Home" route="/" />
      <Tab icon="search-outline" label="Search" route="/search" />
      <Tab icon="scan-outline" label="Scan" route="/scan" />
      <Tab icon="people-outline" label="Squad" route="/squad" />
      <Tab icon="notifications-outline" label="Alerts" route="/alerts" />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 111,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 100,
    elevation: 20, // Android shadow
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 26,
  },

  label: {
    fontSize: 11,
    marginTop: 3,
    color: "#6b7280",
  },

  active: {
    color: "#2563eb",
    fontWeight: "600",
  },
});

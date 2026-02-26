import React from "react";
import { Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../pages/Index.styles";

export default function GridCard({ icon, title, colors, onPress }: any) {
  return (
    <Pressable onPress={onPress} style={styles.gridItem}>
      <LinearGradient colors={colors} style={styles.gridCard}>
        <Ionicons name={icon} size={26} color="white" />
        <Text style={styles.gridText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

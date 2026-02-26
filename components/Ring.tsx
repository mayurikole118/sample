import { rings } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

/**
 * Add more routes here when needed
 */
type AppRoute = "/hackathon" | "/cs" | "/librarians";

type Props = {
  label: string;
  route: AppRoute;
};

export default function Ring({ label, route }: Props) {
  const router = useRouter();

  const spin = useRef(new Animated.Value(0)).current;
  const isSpinning = useRef(false);

  const rotate = spin.interpolate({
    inputRange: [0, 3],
    outputRange: ["0deg", "1080deg"],
  });

  const avatar = createAvatar(rings, {
    seed: label,
    size: 50,
    backgroundColor: ["ffffff00"],
  }).toString();

  const startSpinAndNavigate = () => {
    if (isSpinning.current) return;

    isSpinning.current = true;

    Animated.timing(spin, {
      toValue: 3,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      spin.setValue(0);
      isSpinning.current = false;
      router.push(route);
    });
  };

  return (
    <Pressable onPress={startSpinAndNavigate}>
      <View style={styles.ringWrapper}>
        <Animated.View
          style={[styles.avatarOutline, { transform: [{ rotate }] }]}
        >
          <SvgXml xml={avatar} width={56} height={56} />
        </Animated.View>

        <Text style={styles.circleText}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ringWrapper: {
    alignItems: "center",
    marginRight: 16,
  },

  avatarOutline: {
    borderWidth: 3,
    borderColor: "#3b82f6",
    borderRadius: 40,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "500",
  },
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          {/* Back Button */}
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </Pressable>

          <Text style={styles.headerTitle}>Your College Name</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Preference Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preference</Text>
          <Text style={styles.sectionSubtitle}>
            Change language and theme here.
          </Text>

          <View style={styles.prefButtons}>
            <Pressable style={styles.iconButton}>
              <Ionicons name="sunny-outline" size={20} color="#000" />
            </Pressable>

            <Pressable style={styles.iconButton}>
              <Ionicons name="language-outline" size={20} color="#000" />
            </Pressable>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.sectionSubtitle}>
            Contact administrator for any changes.
          </Text>

          <View style={styles.avatarRow}>
            <View style={styles.avatar} />

            <Pressable style={styles.changeBtn}>
              <Text style={styles.changeBtnText}>Change avatar</Text>
            </Pressable>
          </View>

          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            defaultValue="Omkar Kakeru"
            editable={false}
          />

          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            defaultValue="omkar.kakeru@gmail.com"
            editable={false}
          />

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            defaultValue="omkar1996"
            editable={false}
          />
        </View>

        {/* Change Password */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Change password</Text>
          <Text style={styles.sectionSubtitle}>
            Update your password associated with your account.
          </Text>

          <Text style={styles.label}>Current password</Text>
          <TextInput style={styles.input} secureTextEntry />

          <Text style={styles.label}>New password</Text>
          <TextInput style={styles.input} secureTextEntry />

          <Text style={styles.label}>Confirm password</Text>
          <TextInput style={styles.input} secureTextEntry />

          <Pressable style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Save</Text>
          </Pressable>
        </View>

        {/* Organization */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Organization</Text>
          <Text style={styles.sectionSubtitle}>
            This is your registered organization.
          </Text>

          <Text style={styles.label}>Organization Name</Text>
          <TextInput
            style={[styles.input, { backgroundColor: "#e5e7eb" }]}
            defaultValue="Sample Organization"
            editable={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  scrollContent: {
    paddingBottom: 80,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 8, // 🔥 reduced space
    backgroundColor: "#e5e7eb",
  },

  backButton: {
    padding: 5,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },

  section: {
    padding: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },

  sectionSubtitle: {
    color: "#64748b",
    marginBottom: 15,
  },

  prefButtons: {
    flexDirection: "row",
    gap: 15,
  },

  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#7c3aed",
  },

  changeBtn: {
    marginLeft: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
  },

  changeBtnText: {
    fontWeight: "500",
  },

  label: {
    marginBottom: 6,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  primaryBtn: {
    backgroundColor: "#6366f1",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 15,
  },

  primaryBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});

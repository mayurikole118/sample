import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </Pressable>

        <Text style={styles.collegeName}>Your College Name</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Search Books</Text>

        <View style={styles.searchRow}>
          <TextInput
            placeholder="Book Title"
            style={styles.input}
            placeholderTextColor="#999"
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    marginTop: 20,
  },

  backButton: {
    position: "absolute",
    left: 15,
  },

  collegeName: {
    fontSize: 16,
    fontWeight: "600",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
  },

  button: {
    height: 45,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

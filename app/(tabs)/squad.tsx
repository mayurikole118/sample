import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import Ring from "../../components/Ring";

/**
 * MUST match your Ring.tsx AppRoute type
 */
type AppRoute = "/hackathon" | "/cs" | "/librarians";

type Squad = {
  id: AppRoute;
  name: string;
  handle: string;
  members: string;
};

const mySquads: Squad[] = [
  {
    id: "/hackathon",
    name: "Hackathon",
    handle: "@hackathon",
    members: "5+ Members",
  },
  {
    id: "/cs",
    name: "Computer Science",
    handle: "@cs",
    members: "5+ Members",
  },
  {
    id: "/librarians",
    name: "Librarians",
    handle: "@librarians",
    members: "5+ Members",
  },
];

export default function SquadsPage() {
  const router = useRouter();

  const renderCard = (item: Squad) => (
    <View style={styles.card}>
      {/* 🔥 Move only Computer Science ring left */}
      <View style={item.id === "/cs" ? styles.csAdjustWrapper : undefined}>
        <Ring label={item.name} route={item.id} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.handle}>{item.handle}</Text>
        <Text style={styles.members}>{item.members}</Text>
      </View>

      <Pressable style={styles.viewButton} onPress={() => router.push(item.id)}>
        <Text style={styles.viewText}>View</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.college}>Your College Name</Text>
      </View>

      <TextInput
        placeholder="Search"
        placeholderTextColor="#94a3b8"
        style={styles.search}
      />

      <FlatList
        data={mySquads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderCard(item)}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },
  college: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  search: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f172a",
  },
  handle: {
    fontSize: 13,
    color: "#64748b",
  },
  members: {
    fontSize: 13,
    color: "#3b82f6",
    marginTop: 4,
  },
  viewButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  viewText: {
    color: "#1e293b",
    fontWeight: "500",
  },

  // 👇 This moves only Computer Science ring left
  csAdjustWrapper: {
    marginLeft: -10,
  },
});

import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import Ring from "../../components/Ring";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Animated,
  ScrollView,
  Text,
  View,
  Pressable,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/Index.styles";
import { styles as gridStyles } from "../../styles/gridStyles";

export default function Index() {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const SIDEBAR_WIDTH = width * 0.75;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;

  const openSidebar = () => {
    setSidebarOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: SIDEBAR_WIDTH,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setSidebarOpen(false));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={styles.header}>Your College</Text>
          <Pressable onPress={openSidebar}>
            <Ionicons name="menu-outline" size={26} color="#111" />
          </Pressable>
        </View>

        {/* STORIES */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.circleRow}>
            <Ring label="@hackathon" route="/hackathon" />
            <Ring label="@cs" route="/cs" />
            <Ring label="@librarians" route="/librarians" />
          </View>
        </ScrollView>

        {/* BANNERS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerRow}
          snapToInterval={212}
          decelerationRate="fast"
        >
          <View style={styles.bannerCard}>
            <Animated.Image
              source={require("../../assets/images/palace2.png")}
              style={styles.bannerImg}
            />
            <View style={styles.bannerTextWrapper}>
              <Text style={styles.bannerTitle}>College Ranked #1</Text>
              <Text style={styles.bannerSub}>
                Our college achieved top ranking
              </Text>
            </View>
          </View>

          <View style={styles.bannerCard}>
            <Animated.Image
              source={require("../../assets/images/palace3.png")}
              style={styles.bannerImg}
            />
            <View style={styles.bannerTextWrapper}>
              <Text style={styles.bannerTitle}>Hackathon Winners</Text>
              <Text style={styles.bannerSub}>
                CS students won competition in India
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* GATE CARD */}
        <Pressable onPress={() => router.push("/gate-register/gate-register")}>
          <LinearGradient
            colors={["#38bdf8", "#0ea5e9"]}
            style={styles.gateCard}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="location-sharp"
                  size={20}
                  color="white"
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.gateTitle}>Gate Register</Text>
              </View>
              <Text style={styles.gateSub}>VTU Main Library</Text>
              <Text style={styles.gateDate}>Jan 31</Text>
            </View>

            <View style={styles.gateRight}>
              <View style={styles.statusRow}>
                <View style={styles.dot} />
                <Text style={styles.status}>Checked In</Text>
              </View>
              <Text style={styles.time}>In: 4:41 PM</Text>
            </View>
          </LinearGradient>
        </Pressable>

        {/* GRID */}
        <View style={gridStyles.grid}>
          <Pressable
            onPress={() => router.push("/koha-circulations")}
            style={gridStyles.gridItem}
          >
            <LinearGradient
              colors={["#ec4899", "#a855f7"]}
              style={gridStyles.gridCard}
            >
              <Ionicons name="book" size={26} color="white" />
              <Text style={gridStyles.gridText}>Koha Circulations</Text>
            </LinearGradient>
          </Pressable>

          <Pressable
            onPress={() => router.push("/koha-updates")}
            style={gridStyles.gridItem}
          >
            <LinearGradient
              colors={["#f59e0b", "#f97316"]}
              style={gridStyles.gridCard}
            >
              <Ionicons name="notifications" size={26} color="white" />
              <Text style={gridStyles.gridText}>Koha Updates</Text>
            </LinearGradient>
          </Pressable>

          <Pressable
            onPress={() => router.push("/inout-history")}
            style={gridStyles.gridItem}
          >
            <LinearGradient
              colors={["#10b981", "#22c55e"]}
              style={gridStyles.gridCard}
            >
              <Ionicons name="time" size={26} color="white" />
              <Text style={gridStyles.gridText}>InOut History</Text>
            </LinearGradient>
          </Pressable>

          <Pressable
            onPress={() => router.push("/timer")}
            style={gridStyles.gridItem}
          >
            <LinearGradient
              colors={["#facc15", "#f97316"]}
              style={gridStyles.gridCard}
            >
              <Ionicons name="stopwatch" size={26} color="white" />
              <Text style={gridStyles.gridText}>Timer</Text>
            </LinearGradient>
          </Pressable>

          <Pressable
            onPress={() => router.push("/squads")}
            style={gridStyles.gridItem}
          >
            <LinearGradient
              colors={["#fb7185", "#ef4444"]}
              style={gridStyles.gridCard}
            >
              <Ionicons name="people" size={26} color="white" />
              <Text style={gridStyles.gridText}>Squads</Text>
            </LinearGradient>
          </Pressable>

          <Pressable
            onPress={() => router.push("/profile")}
            style={gridStyles.gridItem}
          >
            <LinearGradient
              colors={["#a855f7", "#ec4899"]}
              style={gridStyles.gridCard}
            >
              <Ionicons name="person" size={26} color="white" />
              <Text style={gridStyles.gridText}>Profile</Text>
            </LinearGradient>
          </Pressable>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {sidebarOpen && (
        <Pressable style={sidebarStyles.overlay} onPress={closeSidebar} />
      )}

      {/* SIDEBAR */}
      <Animated.View
        style={[
          sidebarStyles.sidebar,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={sidebarStyles.header}>
              <View style={sidebarStyles.logoBox}>
                <Ionicons name="apps" size={20} color="#fff" />
              </View>
              <View>
                <Text style={sidebarStyles.appTitle}>Inout Plus</Text>
                <Text style={sidebarStyles.appSub}>By Playtech</Text>
              </View>
            </View>

            <Text style={[sidebarStyles.sectionTitle, { marginTop: 25 }]}>
              Features
            </Text>

            {[
              { label: "In/Out", icon: "log-in-outline" },
              { label: "Koha", icon: "book-outline" },
              { label: "Gate Register", icon: "swap-horizontal-outline" },
              { label: "Attendance", icon: "calendar-outline" },
            ].map((item, index) => {
              const isOpen = expandedMenu === item.label;

              return (
                <View key={index}>
                  <Pressable
                    style={sidebarStyles.menuItem}
                    onPress={() => setExpandedMenu(isOpen ? null : item.label)}
                  >
                    <View style={sidebarStyles.menuRow}>
                      <Ionicons
                        name={item.icon as any}
                        size={20}
                        color="#374151"
                      />
                      <Text style={sidebarStyles.menuText}>{item.label}</Text>
                    </View>

                    <Ionicons
                      name={isOpen ? "chevron-down" : "chevron-forward"}
                      size={18}
                      color="#9CA3AF"
                    />
                  </Pressable>

                  {isOpen && (
                    <View style={sidebarStyles.subMenuContainer}>
                      {item.label === "In/Out" && (
                        <>
                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/scan")}
                          >
                            <Text style={sidebarStyles.subMenuText}>Scan</Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/inout-history")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              History
                            </Text>
                          </Pressable>
                        </>
                      )}

                      {item.label === "Koha" && (
                        <>
                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/dashboard")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Dashboard
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/search")}
                          >
                            <Text style={sidebarStyles.subMenuText}>Books</Text>
                          </Pressable>
                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/inout-history")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Search History
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/koha-circulations")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Circulations
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/koha-updates")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Updates
                            </Text>
                          </Pressable>
                        </>
                      )}

                      {item.label === "Gate Register" && (
                        <>
                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() =>
                              router.push("/gate-register/dashboard")
                            }
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Dashboard
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/gate-register/gates")}
                          >
                            <Text style={sidebarStyles.subMenuText}>Gates</Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() =>
                              router.push("/gate-register/real-time")
                            }
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Real Time
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() =>
                              router.push("/gate-register/reports")
                            }
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Reports
                            </Text>
                          </Pressable>
                        </>
                      )}

                      {item.label === "Attendance" && (
                        <>
                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/attendance-mark")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Dashboard
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/attendance-report")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Quick Class
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/attendance-report")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Calender view
                            </Text>
                          </Pressable>

                          <Pressable
                            style={sidebarStyles.subMenuItem}
                            onPress={() => router.push("/attendance-report")}
                          >
                            <Text style={sidebarStyles.subMenuText}>
                              Time table
                            </Text>
                          </Pressable>
                        </>
                      )}
                    </View>
                  )}
                </View>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
    </SafeAreaView>
  );
}

const sidebarStyles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get("window").width * 0.75,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 22,
    paddingTop: 10,
    elevation: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  logoBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  appTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  appSub: {
    fontSize: 12,
    color: "#6B7280",
  },
  sectionTitle: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  menuText: {
    fontSize: 15,
    color: "#111827",
  },
  subMenuContainer: {
    paddingLeft: 40,
    backgroundColor: "#F9FAFB",
  },
  subMenuItem: {
    paddingVertical: 10,
  },
  subMenuText: {
    fontSize: 14,
    color: "#4B5563",
  },
});

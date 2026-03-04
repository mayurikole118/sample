import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f5f7fb" },

  content: { padding: 15, flexGrow: 1 },

  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },

  circleRow: { flexDirection: "row", alignItems: "center" },

  bannerRow: { paddingVertical: 10, paddingHorizontal: 5 },

  bannerCard: {
    width: 200,
    height: 200,
    borderRadius: 18,
    overflow: "hidden",
    marginRight: 12,
  },

  bannerImg: { width: "100%", height: "100%" },

  bannerTextWrapper: {
    position: "absolute",
    bottom: 10,
    left: 14,
    right: 14,
  },

  bannerTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  bannerSub: { color: "white", fontSize: 12 },

  gateCard: {
    marginTop: 15,
    padding: 18,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  gateTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  gateSub: { color: "white" },
  gateDate: { color: "white" },

  gateRight: { alignItems: "flex-end" },

  statusRow: { flexDirection: "row", alignItems: "center" },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22c55e",
  },

  status: { color: "white", marginLeft: 6 },
  time: { color: "white" },

  // GRID
  grid: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  gridItem: { width: "48%", marginBottom: 12 },
  gridItemFull: { width: "100%", marginBottom: 12 },

  gridCard: {
    height: 130,
    borderRadius: 20,
    padding: 15,
    justifyContent: "space-between",
  },

  gridText: { color: "white", fontWeight: "bold", fontSize: 15 },

  // FEED
  feedHeader: { marginTop: 20, fontSize: 18, fontWeight: "bold" },

  feedCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 15,
    marginTop: 10,
  },

  feedHeaderRow: { flexDirection: "row", alignItems: "center" },

  feedAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6ee7b7",
    marginRight: 10,
  },

  feedTitle: { fontWeight: "bold" },
  feedSub: { color: "gray", fontSize: 12 },

  feedContent: { marginVertical: 2 },

  feedActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  feedBtn: {
    flexDirection: "row",
    gap: 6,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
  },

  copyBtn: {
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3b82f6",
  },

  // BOTTOM BAR
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});

export default styles;

import { StyleSheet, Text, View } from "react-native";
import { TYPE_COLORS } from "../constants/pokemon";

export default function TypeBadge({ type }) {
  const color = TYPE_COLORS[type] ?? "#687080";

  return (
    <View style={[styles.badge, { backgroundColor: `${color}22` }]}>
      <Text style={[styles.label, { color }]}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
  },
});

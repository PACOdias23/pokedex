import { Image } from "expo-image";
import { ARTWORK, TYPE_COLORS } from "../constants/pokemon";
import TypeBadge from "./TypeBadge";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ pokemon, captured, onCapture }) {
  const color = TYPE_COLORS[pokemon.type] ?? "#687080";

  return (
  <View style={[styles.card, captured && styles.capturedCard]}>
      <View style={[styles.imageContainer, { backgroundColor: `${color}22` }]}>
        <Image
          source={{ uri: `${ARTWORK}${pokemon.number}.png` }}
          style={styles.image}
          contentFit="contain"
          accessibilityLabel={`Image de ${pokemon.name}`}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.number}>#{pokemon.number}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <TypeBadge type={pokemon.type} />
        <Pressable onPress={onCapture} style={styles.captureButton}>
          <Text>
            {captured ? "capturé": "capturer"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 12,
    padding: 12,
    minHeight: 112,
  },
  imageContainer: {
    width: 84,
    height: 84,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 76,
    height: 76,
  },
  details: {
    flex: 1,
    marginLeft: 14,
    gap: 5,
  },
  number: {
    color: "#56617A",
    fontSize: 13,
    fontWeight: "600",
  },
  name: {
    color: "#171A22",
    fontSize: 18,
    fontWeight: "700",
  },
  captureButton: {
  alignSelf: "flex-start",
  borderColor: "#5264D8",
  borderRadius: 8,
  borderWidth: 1,
  marginTop: 5,
  paddingHorizontal: 12,
  paddingVertical: 6,
},
captureButtonText: {
  color: "#5264D8",
  fontSize: 13,
  fontWeight: "600",
},

capturedCard: {
  backgroundColor: "#EEF2FF",
  borderColor: "#5264D8",
  borderWidth: 2,
},

});

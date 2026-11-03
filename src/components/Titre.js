import { StyleSheet, Text } from "react-native";

export default function Titre({ count }) {
  return (
    <>
      <Text style={styles.titre}>Mon Pokédex</Text>
      <Text style={styles.count}>{count} Pokémon</Text>
    </>
  );
}

const styles = StyleSheet.create({
  titre: {
    color: "#171A22",
    fontSize: 28,
    fontWeight: "bold",
  },
  count: {
    color: "#687080",
    fontSize: 15,
    marginTop: 4,
    marginBottom: 20,
  },
});

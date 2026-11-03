import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";
import { POKEMONS } from "../constants/pokemon";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Titre count={POKEMONS.length} />
        <View style={styles.counter}>
          <Text style={styles.counterText}>Compteur : {count}</Text>
          <View style={styles.counterButtons}>
            <Pressable
              accessibilityLabel="Diminuer le compteur"
              accessibilityRole="button"
              onPress={() =>
                setCount((currentCount) => Math.max(0, currentCount - 1))
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>−</Text>
            </Pressable>
            <Pressable
              accessibilityLabel="Incrémenter le compteur"
              accessibilityRole="button"
              onPress={() => setCount((currentCount) => currentCount + 1)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          <Pressable
            accessibilityRole="button"
            onPress={() => setCount(0)}
            style={[styles.button, styles.resetButton]}
          >
            <Text style={styles.buttonText}>Réinitialiser</Text>
          </Pressable>
        </View>
        <ScrollView
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        >
          {POKEMONS.map((pokemon) => (
            <PokemonCard key={pokemon.number} pokemon={pokemon} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F3F7",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  counter: {
    marginBottom: 20,
  },
  counterText: {
    color: "#171A22",
    fontSize: 16,
    marginBottom: 10,
  },
  counterButtons: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5264D8",
    borderRadius: 10,
    minWidth: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  resetButton: {
    alignSelf: "flex-start",
    backgroundColor: "#687080",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  list: {
    paddingBottom: 20,
  },
});

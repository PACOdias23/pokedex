import { Pressable, Text, View } from "react-native";
import { useState } from "react";

export default function Aide() {
  const [isAideVisible, setIsAideVisible] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setIsAideVisible((visible) => !visible)}>
        <Text>{isAideVisible ? "Masquer l'aide" : "Afficher l'aide"}</Text>
      </Pressable>

      {isAideVisible && <Text>Voici le contenu de l’aide.</Text>}
    </View>
  );
}
import { View, Text, StyleSheet } from "react-native";
import TripListScreen from "./screens/TripListScreen";

export default function App() 
{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CovoitApp</Text>
      <Text style={styles.subtitle}>Le covoiturage entre collègues</Text>
      <TripListScreen style={styles.list}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#324270",
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",

  },
  subtitle: {
    fontSize: 16,
    color: "#AEB4D6",
    marginTop: 8,
    paddingBottom: 10,
  },

});
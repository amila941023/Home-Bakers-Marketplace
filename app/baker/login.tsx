import { useState } from "react";
import { View, Text, TextInput, Button, Alert, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

return (
    <ImageBackground source={require("../../assets/images/login.jpg")} style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "white" }}>Baker Login</Text>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <Button title="Login" onPress={()=>{}} color="blue"/>

       /* Sign Up Section */
       <View style={styles.signupContainer}>
          <Text style={{ color: "white", fontSize: 16 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/baker/signup")}>
            <Text style={styles.signupText}> Sign Up</Text>
          </TouchableOpacity>
        </View>    
      </View>
    </ImageBackground>
  );
} 


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  signupContainer: {
    flexDirection: "row" as "row", // Fix for TypeScript error
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signupText: {
    color: "gray",
    fontSize: 16,
  },
  signupLink: {
    color: "#ffcc00",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
  },
});
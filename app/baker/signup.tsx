import { useState } from "react";
import { View, Text, TextInput, Button, Alert, ImageBackground } from "react-native";



import { useRouter } from "expo-router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();



  return (
    <ImageBackground source={require("../../assets/images/login.jpg")} style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "white" }}>Baker Signup</Text>
        <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.input} />
        <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={styles.input} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <Button title="Sign Up" onPress={()=>{}} color="blue" />
      </View>
    </ImageBackground>
  );
}

const styles = {
  input: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
};

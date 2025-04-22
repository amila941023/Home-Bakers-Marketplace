import { useState } from "react";
import { View, Text, TextInput, Button, Alert, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

import { auth, db } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  //Handle Sign Up function
  const handleSignUp = async () => {
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });

      Alert.alert("Success", "Account created!");
      router.push("/baker/home"); // Ensure this route exists

    } catch (error) {
      console.log("Signup error:", error);
      Alert.alert("Error", (error as Error).message);
    }
  };



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

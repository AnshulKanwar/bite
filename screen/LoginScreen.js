import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// const auth = getAuth();

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [human, sethuman] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.email)
        sethuman(user.email)
        navigation.navigate("HomeStack", {user: user.email})
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        alert('Registered Successfully!')
        sethuman(user.email)
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        alert("Logged in")
        sethuman(user.email)
        navigation.navigate("HomeStack", {user: user.email})
      })
      .catch(error => alert(error.message))
  }

  const handleSignOut = () => {
    auth.signOut(auth)
    .then(() => {
      alert("Logged Out")
      sethuman('')
    })
    .catch(error => alert(error.message))
  }

  return (
    <View
      style={styles.container}
      behavior="padding"
    >
      
      {/* </View> */}
      
      {
        (human) ? 
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom:10 }}>Logged In</Text>
          <Text> Currently logged in as: {human} </Text>
          <View style={ styles.buttonContainer }>
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                SignOut
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        : (
        <>
          <View style={styles.inputContainer}>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10, }}>Login / Register</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
        </>
        )
      }
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#000',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
})
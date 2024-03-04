// Import necessary modules
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const RegistrationPage = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle registration
  const handleRegistration = () => {
    // Validate form fields before submitting
    if (!email || !password || !confirmPassword || !phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    // Additional validation logic can be added here

    // Submit registration data
    // You can add your API call or other logic here
    alert('Registration successful!');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>User Registration</Text>

        {/* Email input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#696969"
          onChangeText={(text) => setEmail(text)}
        />

        {/* Password input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#696969"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        {/* Confirm Password input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#696969"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />

        {/* Phone Number input */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#696969"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhoneNumber(text)}
        />

        {/* Address input (optional) */}
        <TextInput
          style={styles.input}
          placeholder="Address (optional)"
          placeholderTextColor="#696969"
          onChangeText={(text) => setAddress(text)}
        />

        {/* Registration button */}
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a', // Dark background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text color
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#fff', // White border color
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#fff', // White text color
  },
  button: {
    backgroundColor: '#4CAF50', // Green button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
});

export default RegistrationPage;

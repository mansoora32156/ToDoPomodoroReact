import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import * as GoogleSignIn from 'expo-google-sign-in';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

type LoginPageProps = {
    onLogin: () => void;
  };

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    if (username && password) {
      console.log('Logged in successfully');
    } else {
      console.log('Invalid username or password');
    }
  };

  const handleFacebookLogin = async () => {
    const redirectUrl = await WebBrowser.openAuthSessionAsync(
      'https://www.facebook.com/v13.0/dialog/oauth?client_id=<YOUR_APP_ID>&redirect_uri=<YOUR_REDIRECT_URL>&scope=email',
    );

    // Check the redirect URL and handle authentication here
    console.log('Facebook login redirect URL:', redirectUrl);
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <a href="/mainapp">Login</a>

      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>OR Login with:</Text>
        <Button title="Facebook" onPress={handleFacebookLogin} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  socialLoginContainer: {
    marginTop: 20,
  },
  socialLoginText: {
    marginBottom: 8,
  },
});

export default LoginPage;

import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => router.replace('/(auth)/login')
        }
      ]
    );
  };

  return (
    <View className="flex-1 justify-center items-center px-8 bg-white">
      <Text className="text-3xl font-bold mb-4">Welcome to CryWithMe!</Text>
      <Text className="text-gray-600 text-center mb-8">
        You've successfully logged in to your account.
      </Text>

      <View className="w-full max-w-sm">
        <TouchableOpacity
          className="bg-red-600 rounded-lg py-4 mb-4"
          onPress={handleLogout}
        >
          <Text className="text-white text-center font-semibold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

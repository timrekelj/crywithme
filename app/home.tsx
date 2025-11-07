import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import LoadingScreen from '@/components/screens/LoadingScreen';

export default function HomeScreen() {
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      router.replace('/(auth)/login');
    }
  }, [user, loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await signOut();
              router.replace('/(auth)/login');
            } catch (error: any) {
              Alert.alert('Error', 'Failed to logout. Please try again.');
            }
          }
        }
      ]
    );
  };

  return (
    <View className="flex-1 justify-center items-center px-8 bg-white">
      <Text className="text-xl font-instrument-serif-bold mb-4">cry with me</Text>
      <Text className="text-center mb-2 font-base italic font-instrument-serif">
        A gentle space to feel your emotions. I'm here to sit with you through whatever you're experiencing.
      </Text>
      <View className="w-full max-w-sm">
        <TouchableOpacity
          className="bg-red-600 rounded-lg py-4 mb-4"
          onPress={handleLogout}
        >
          <Text className="text-white text-center font-instrument-serif-semibold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

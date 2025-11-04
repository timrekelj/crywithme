import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: Check if user is authenticated and redirect accordingly
  // If authenticated, redirect to /home
  // If not authenticated, redirect to login
  return <Redirect href="/(auth)/login" />;
}

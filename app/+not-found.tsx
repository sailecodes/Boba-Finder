import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <Link
      href="/"
      style={{
        fontSize: 40,
        fontWeight: 600,
      }}>
      <Text>Go to home screen!</Text>
    </Link>
  );
}

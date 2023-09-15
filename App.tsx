import { View } from "react-native";
import Main from "./src/components/Main";
import { theme } from "./src/theme";

export default function App() {
  return (
    <View style={theme.page}>
      <Main />
    </View>
  );
}

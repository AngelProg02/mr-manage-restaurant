import { View, FlatList, Image } from "react-native";
import { food_item } from "../../interfaces/menu";
import StyledText from "../../styles/StyledText";
import { theme } from "../../theme";

export default function MenuList() {
  return (
    <View style={theme.page}>
      <StyledText center>Menú</StyledText>
      <FlatList
        data={food_item}
        renderItem={({ item: menu }) => {
          return (
            <View>
              <StyledText>{menu.Name}</StyledText>
              <StyledText bold>Description</StyledText>
              <StyledText>{menu.description}</StyledText>
              <StyledText bold>Price</StyledText>
              <StyledText>{menu.price}</StyledText>
              <Image
                source={{ uri: menu.image }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

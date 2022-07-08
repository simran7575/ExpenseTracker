import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CategoriesList } from "../../../data/CategoriesData";
import RenderCategoryItem from "./RenderCategoryItem";

// create a component
function CategoryList() {
  const [isFocused, setIsFocused] = useState(1);
  const changeFocus = (pressedIndex) => {
    setIsFocused(pressedIndex);
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={CategoriesList}
        keyExtractor={(item, index) => item.id}
        renderItem={(item) => (
          <RenderCategoryItem
            item={item.item}
            onPress={changeFocus}
            focusedId={isFocused}
          />
        )}
      />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default CategoryList;

import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SectionListComponent,
  Image,
  Pressable,
  Alert,
} from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus2", price: "$5.00", foto: "lemon" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const images = {
  lemon: require("../assets/images/image-lemon.png"),
  hummus: require("../assets/images/image-lemon.png"),
  // etc
};

const MenuItemsSectionList = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} foto={item.foto} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}
      ></SectionList>
    </View>
  );
};

const Item = ({ name, price, foto }) => {
  const onPressItem = () => {
    Alert.alert("Producto", `${name} - ${price}`, [{ text: "OK" }]);
  };

  return (
    <Pressable
      onPress={onPressItem}
      style={({ pressed }) => [
        menuStyles.itemContainer,
        pressed && { opacity: 0.6 },
      ]}
    >
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>

      {foto && images[foto] && (
        <Image source={images[foto]} style={menuStyles.image} />
      )}
    </Pressable>
  );
};

/* 
  <View style={menuStyles.itemContainer}>
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
    
    <View>
        {foto && images[foto] && (
              <Image source={images[foto]} style={{ width: 50, height: 50, marginLeft: 10 }} />
            )}
    </View>
    
  </View>*/

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => <Text style={menuStyles.footerText}>End of Menu</Text>;

export default MenuItemsSectionList;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#333333",
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: "#F4CE14",
  },
  sectionHeader: {
    color: "black",
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
  },
  generalItemContainer: {
    backgroundColor: "#333333",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

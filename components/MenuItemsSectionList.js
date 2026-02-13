import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SectionListComponent,
  Image,
  Pressable,
  Alert,
  Modal,
} from "react-native";
import { useState } from "react";

const menuItemsToDisplay = [
  {
    title: "Entrantes",
    data: [
      { name: "Tortilla de patatas", price: "5.50€", foto: "tortilla" },
      { name: "Jamón Ibérico", price: "9.50€", foto: "jamon" },
      { name: "Croquetas de Jamón", price: "6.50€", foto: "croquetas" },
      { name: "Ensaladilla rusa", price: "6.00€", foto: "ensaladilla" },
      { name: "Gazpacho andaluz", price: "4.80€", foto: "gazpacho" },
      { name: "Boquerones en vinagre", price: "7.50€", foto: "boquerones" },
    ],
  },
  {
    title: "Platos Principales",
    data: [
      { name: "Paella valenciana", price: "14.90€", foto: "paella" },
      { name: "Cocido madrileño", price: "13.00€", foto: "cocido" },
      { name: "Bacalao al pil-pil", price: "17.50€", foto: "bacalao" },
      { name: "Solomillo de cerdo", price: "15.50€", foto: "solomillo" },
    ],
  },
  {
    title: "Guarniciones",
    data: [
      { name: "Patatas bravas", price: "4.50€", foto: "bravas" },
      {
        name: "pimientos del piquillo",
        price: "5.00€",
        foto: "pimientos",
      },
      { name: "Pan rústico con alioli", price: "3.00€", foto: "pan" },
      { name: "Verduras a la plancha", price: "4.80€", foto: "verduras" },
      { name: "Ensalada mixta", price: "4.50€", foto: "ensalada" },
      { name: "Patatas panaderas", price: "4.00€", foto: "patatapan" },
      { name: "Arroz blanco", price: "3.50€", foto: "arrozblanco" },
    ],
  },
  {
    title: "Postres",
    data: [
      { name: "Flan casero", price: "4.50€", foto: "flan" },
      { name: "Crema catalana", price: "5.00€", foto: "catalana" },
      { name: "Arroz con leche", price: "4.50€", foto: "arrozleche" },
      { name: "Churros con chocolate", price: "5.50€", foto: "churros" },
    ],
  },
];

const images = {
  //Entrantes
  tortilla: require("../assets/images/tortilla.png"),
  jamon: require("../assets/images/jamon.png"),
  croquetas: require("../assets/images/croquetas.png"),
  ensaladilla: require("../assets/images/ensaladilla.png"),
  gazpacho: require("../assets/images/gazpacho.png"),
  boquerones: require("../assets/images/boquerones.png"),

  //Platos Principales
  paella: require("../assets/images/paella.png"),
  cocido: require("../assets/images/cocido.png"),
  bacalao: require("../assets/images/bacalao.png"),
  solomillo: require("../assets/images/solomillo.png"),

  //Guarniciones
  bravas: require("../assets/images/bravas.png"),
  pimientos: require("../assets/images/pimientos.png"),
  pan: require("../assets/images/pan.png"),
  verduras: require("../assets/images/verduras.png"),
  ensalada: require("../assets/images/ensalada.png"),
  patatapan: require("../assets/images/patatapan.png"),
  arrozblanco: require("../assets/images/arrozblanco.png"),

  //Postres
  flan: require("../assets/images/flan.png"),
  catalana: require("../assets/images/catalana.png"),
  arrozleche: require("../assets/images/arrozleche.png"),
  churros: require("../assets/images/churros.png"),
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
  /* const onPressItem = () => {
    Alert.alert("Producto", `${name} - ${price}`, [{ text: "OK" }]);
  }; */

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
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

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{name}</Text>
            <Text style={styles.modalPrice}>{price}</Text>

            {foto && images[foto] && (
              <Image
                source={images[foto]}
                style={styles.modalImage}
                resizeMode="contain"
              />
            )}

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => <Text style={menuStyles.footerText}>End of Menu</Text>;

export default MenuItemsSectionList;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "#6a6a6a",
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

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#a7a6a6",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 16,
    color: "#F4CE14",

    marginBottom: 15,
    fontWeight: "bold",
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 15,
    //border: "1px solid black",

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "600",
  },
});

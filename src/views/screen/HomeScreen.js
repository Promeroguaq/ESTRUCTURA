import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,

} from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
 
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import COLORS from "../screen/consts/colors";
import categories from "../screen/consts/categories";
import Places from "./consts/Places";
import Department from "./consts/Department";
import Municipality from "./consts/Municipality";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
const HomeScreen = ({ navigation }) => {
  
  const optionsList = [
    {title: 'Sol y Playa', img: require('../../../assets/Advantures/Sol y Playa.jpg')},
    {title: 'Ferias y Fiestas', img: require('../../../assets/Advantures/Ferias y Fiestas.jpg')},
    {title: 'Deportes de Aventura', img: require('../../../assets/Advantures/Deportes de aventura.JPG')},
    {title: 'Pueblos que Enamoran', img: require('../../../assets/Advantures/Pueblos que enamoran.jpg')},
    {title: 'Turismo Comunitario', img: require('../../../assets/Advantures/Turismo Comunitario.jpeg')},
    {title: 'Pueblos Patrimonio', img: require('../../../assets/Advantures/Pueblos Patrimonio.jpeg')},
    {title: 'Parques Tematicos', img: require('../../../assets/Advantures/Parques tematicos.jpeg')},
    {title: 'Avistamiento de Aves', img: require('../../../assets/Advantures/Avistamiento de aves.jpeg')},
    ];
    
  
  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;


    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? COLORS.white : COLORS.white,
                ...style.categoryBtn,
              }}
            >
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 50, width: 50, resizeMode: "cover" }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const ListOptions = () => {
    return (
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator={false}>

      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <View style={style.optionsCard} key={index}>
            {/* House image */}
            <Image source={option.img} style={style.optionsCardImage} />
   
            {/* Option title */}
            <Text style={{marginTop: 5, fontSize: 9, fontWeight: 'bold', alignItems: "center"}}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 550 }}>
        <Image
          source={require("../../../assets/Rut.jpeg")}
          style={{ height: 55, width: 55, borderRadius: 50 }}
        />
      </View>
      <View style={style.searchInputContainer}>
        <Icon name="search" size={20} style={{ marginLeft: 40 }} />
        <TextInput
          placeholder="Buscar destino.."
          style={{ fontSize: 9, paddingLeft: 10 }}
        />
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        ></View>
        <Icon
          name="shopping-cart"
          size={28}
          style={{ marginLeft: 50 }}
          onPress={() => this.ScrollView}
        />
        <View
          style={{
            height: -140,
            marginTop: 255,
            position: "absolute",
            zIndex: "auto",
            flexDirection: "row",
            paddingHorizontal: -360,
          }}
        ></View>
      </View>
      <View>
       <ListCategories />
       <ListOptions />
      </View>
     <View style={styles.TabBar}>
            <ScrollableTabView
              style={{marginTop: 20}}
            initialPage={1}
              renderTabBar={() => <DefaultTabBar/>}>
              <Places tabLabel="Ciudades"/>
              <Department tabLabel="Departamentos"/>
              <Municipality tabLabel="Municipios"/>

            </ScrollableTabView>
        </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 80,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 30,
    width: "70%",
    backgroundColor: COLORS.grey,
    marginTop: -540,
    marginLeft: 55,
    borderRadius: 60,
    flexDirection: "row",
    paddingHorizontal: 2,
    alignItems: "center",
  },
  categoriesListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    paddingHorizontal: 45,
  },
  categoryBtn: {
    height: 70,
    width: 60,
    marginRight: 10,
    borderRadius: 75,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  card: {
    height: 0,
    width: cardWidth,
    marginHorizontal: 9,
    marginBottom: 170,
    marginTop: 10,
    borderRadius: 15,
  },

  addToCartBtn: {
    height: 10,
    width: 0,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsCard: {
    height:100,
    width: width / 4 - 5,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 600,
    paddingTop: -17,
    paddingHorizontal: 5,
  },
  optionsCardImage: {
    height: 60,
    borderRadius: -200,
    width: '80%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -6,
    paddingHorizontal: 10,
  },
});
export default HomeScreen;

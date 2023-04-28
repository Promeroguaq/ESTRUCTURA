import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../views/screen/consts/colors";
import places from "../screen/consts/places";
import { IconButton } from "react-native-paper";
const DetailsScreen = ({ navigation, route }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const item = route.params;
  console.log(item);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={24} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}></Text>
      </View>
      <TouchableOpacity>
        <Image
          source={item.image}
          style={{
            height: 300,
            width: 330,
            top: 10,
            position: "absolute",
            zIndex: 1,
            borderRadius:20,
            alignItems: "center",
            marginLeft: 15,
          }}
        />
      </TouchableOpacity>
      <View style={{ marginVertical: 2 }}>
        <View
          style={{
            flexDirection: "row",
            top: 350,
            justifyContent: "space-between",
            paddingHorizontal: 40,
          }}
        >
          <TouchableOpacity>
            <Icon name="tour" size={20} onPress={navigation.this} />
            <Text
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Tour
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="run-circle" size={20} onPress={navigation.this} />
            <Text
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Actividades
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="domino-mask" size={20} onPress={navigation.this} />
            <Text
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Cultura
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="circle" size={20} onPress={navigation.this} />
            <Text
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >Eventos
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                flexDirection: "row",
                justifyContent: "center",
              }}
            ></TouchableOpacity>
            <View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DetailsScreen;

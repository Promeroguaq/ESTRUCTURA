import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from "../screen/consts/colors";
import {PrimaryButton} from '../../views/component/Button';
const OneBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 650 }}>
        <Image
        onPress={()=>navigation.navigate("Home")}
          style={{ 
            height: "100%", 
            resizeMode: "contain",
            top: 40,
            }}
          source={require("../../../assets/Rutas.jpeg")}
        />
      </View>
      <View style={style.indicatorContainer}>
      <PrimaryButton onPress={()=>navigation.navigate("Home")}/>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  indicator: {
    height: 40,
    width: 12,
    borderRadius: 6,
    marginHorizontal: 70,
  },
});
export default OneBoardScreen;
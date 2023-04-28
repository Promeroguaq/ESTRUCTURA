import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../screen/consts/colors';


const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity  onPress={onPress}>
      <View style={style.btnContainer}>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {PrimaryButton};
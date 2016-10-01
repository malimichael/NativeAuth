import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#383A3F',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 4
  },
  labelStyle: {
    color: '#383A3F',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

import React, { Component } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class IconTextInput extends Component {
  static defailtProps = {
    iconName : 'perm-identit',
    placeholder: '입력해 주세요',
    type : 'text',
    colorName : 'glay'
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Ionicons 
          style = {styles.icon}
          name = {this.props.iconName}
          size = {20}
          color = {this.props.colorName}
        />
        <TextInput
          autoFocus = {this.props.autoFocus}
          placeholder = {this.props.placeholder}
          returnKeyType = {this.props.returnKeyType}
          keyboardType = {this.props.keyboardType}
          defaultValue = {this.props.defaultValue}
          editable = {this.props.editable}
          onSubmitEditing = {this.props.onSubmitEditing}
          onChangeText = {
            text => {
              this.props.onChange && this.props.onChange(text)
            }
          }
          style = {{
            flex : 1,
            height : '100%'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
});

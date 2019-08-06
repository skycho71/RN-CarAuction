import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class IconText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style = {styles.container}>
                <Ionicons 
                    name = {this.props.iconName}
                    size = {this.props.size ? this.props.size + 5 : 20}
                    color = {this.props.color || "#bbb"}
                    style = {{marginRight: 10}}
                />
                <Text style={{
                    fontSize : this.props.size || 15,
                    color : this.props.color || '#333',
                    
                }}>
                    {this.props.children} 
                </Text>
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        alignItems : 'center',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: '50%'
      },
})
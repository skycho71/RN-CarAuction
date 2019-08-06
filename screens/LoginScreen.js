import React, { Component } from 'react';
import { StyleSheet, Text, View , KeyboardAvoidingView } from 'react-native';
import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';

export default class LoginScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <View style={styles.container}>
                    <Text> This is Loggin Input</Text>
                    <IconTextInput 
                        style = {{marginTop: 10, }}
                        iconName ={'person'} 
                        placeholder = {'이름'}
                    />
                    <IconTextInput
                        iconName ={'email'} 
                        placeholder =  {'메일'}
                    />
                    <RoundButton 
                        style = {{marginTop: 10}}
                        title = {'회원가입/ 로그인'}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    alignSelf : 'center',
    flexDirection: 'column',
    padding : 30,
    alignItems : 'center'
  },
});

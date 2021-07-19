import * as React from 'react';
import { Button, View, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";
const disabledColor = '#BEBEBE';
export const renderButtonView = (name, color, callback) => {
    return (React.createElement(View, { key: name + '_parent', style: styles.buttonContainer },
        React.createElement(Button, { key: name, title: name, color: color, onPress: () => { callback(); } })));
};
export const renderFieldView = (name, value, callback) => {
    return (React.createElement(KeyboardAvoidingView, { key: name + '_keyboard_avoiding_view', style: {
            width: 300,
            height: 40,
            borderColor: textInputBorderColor,
            borderWidth: 2,
            borderRadius: 5,
            marginTop: 8
        } },
        React.createElement(TextInput, { key: name, style: styles.textInput, placeholder: name, value: value, multiline: false, returnKeyType: "done", textAlign: "center", placeholderTextColor: "#d1dde3", editable: true, autoCapitalize: "none", onChangeText: callback })));
};
/* S T Y L E S */
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    textInput: {
        marginHorizontal: 10,
        height: 40,
    },
});
//# sourceMappingURL=Helpers.js.map
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import OSDemo from './OSDemo';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(StatusBar, { barStyle: "dark-content" }),
        React.createElement(SafeAreaView, null,
            React.createElement(ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: styles.scrollView },
                React.createElement(View, { style: styles.body },
                    React.createElement(OSDemo, { name: "OneSignal" }))))));
};
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
export default App;
//# sourceMappingURL=App.js.map
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
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Platform, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
class OSConsole extends React.Component {
    constructor(props) {
        super(props);
    }
    scrollToEnd = () => {
        this.scrollView.scrollToEnd;
    };
    render() {
        return (React.createElement(SafeAreaView, { style: styles.body },
            React.createElement(ScrollView, { nestedScrollEnabled: true, style: styles.scrollView, ref: (scrollView) => { this.scrollView = scrollView; }, onContentSizeChange: () => this.scrollView.scrollToEnd({ animated: true }) },
                React.createElement(View, { style: styles.console },
                    React.createElement(Text, { style: Platform.OS === "android" ? styles.textAndroid : styles.textIOS }, this.props.value)))));
    }
}
;
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: 'grey',
        height: 200,
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row'
    },
    console: {
        flexWrap: 'wrap',
        padding: 10,
        flexDirection: 'row'
    },
    textIOS: {
        fontFamily: 'Courier',
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 10,
    },
    textAndroid: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 20,
    }
});
export default OSConsole;
//# sourceMappingURL=OSConsole.js.map
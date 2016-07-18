import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

import styles from './pruebasStyle';


class Prueba1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>texto prueba 1</Text>
            </View>
        );
    }
}

export default Prueba1;

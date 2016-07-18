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


class Prueba2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>texto prueba 2</Text>
            </View>
        );
    }
}

export default Prueba2;

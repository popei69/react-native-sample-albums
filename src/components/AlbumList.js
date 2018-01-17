import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        return (
            <View>
                <Text>Test</Text>
            </View>
        );
    }
}

export default AlbumList;

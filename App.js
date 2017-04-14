import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Application from './src/Application.js';
import allReducers from './src/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { TextInput, TouchableOpacity } from 'react-native';
const store = createStore(allReducers);

export default class App extends React.Component {
  render() {
    return (
    <Application />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

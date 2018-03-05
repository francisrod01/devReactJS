import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 30,
    backgroundColor: 'steelblue',
    margin: 4,
  },
})

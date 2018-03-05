import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.display}>Display</Text>

        <Text style={styles.result}>Result</Text>

        <View style={styles.buttons}>
          <View style={styles.col1}>
            <Text>Col1</Text>
          </View>
          <View style={styles.col2}>
            <Text>Col2</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: '#EFEFEF',
    fontSize: 60,
    textAlign: 'right',
  },
  result: {
    flex: 0.4,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#EFEFEF',
    fontSize: 20,
    textAlign: 'right',
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  col1: {
    flex: 3,
    backgroundColor: 'grey',
  },
  col2: {
    flex: 1,
    backgroundColor: 'red',
  },
})

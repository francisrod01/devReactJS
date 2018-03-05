import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default class App extends React.Component {
  render() {
    const col1Buttons = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '='],
    ]
    return (
      <View style={styles.container}>

        <Text style={styles.display}>Display</Text>

        <Text style={styles.result}>Result</Text>

        <View style={styles.buttons}>
          <View style={styles.col1}>
            { col1Buttons.map((line, i) => (
              <View key={i} style={styles.line}>
                { line.map((op, y) => (
                  <View key={y} style={styles.btn}>
                    <Text style={styles.btnText}>{op}</Text>
                  </View>
                )) }
              </View>
            )) }
          </View>
          <View style={styles.col2}>
            <View style={styles.line}>
              <Text>Col2</Text>
              <Text>Col2</Text>
              <Text>Col2</Text>
            </View>
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
  line: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 50,
  },
})

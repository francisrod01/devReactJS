import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    // Defining bindables.
    this.handleOp = this.handleOp.bind(this)

    // Defining states.
    this.state = {
      display: '',
      result: '',
    }
  }
  handleOp(op) {
    if (op === 'C') {
      this.setState({
        display: '',
        result: '',
      })
    } else if (op === '=') {
      this.setState({
        display: this.state.result,
        result: '',
      })
    } else {
      const display = this.state.display + op
      let result = this.state.result

      try {
        let fixedOperation = display.split('X').join('*')
        fixedOperation = fixedOperation.split('/').join('/')
        result = new String(eval(fixedOperation)).toString()
      } catch (err) {}

      this.setState({
        display,
        result,
      })
    }
  }
  render() {
    const col1Buttons = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '='],
    ]
    const col2Buttons = [
      'C',
      '/',
      'X',
      '-',
      '+',
    ]
    return (
      <View style={styles.container}>

        <Text style={styles.display}>{this.state.display}</Text>

        <Text style={styles.result}>{this.state.result}</Text>

        <View style={styles.buttons}>
          <View style={styles.col1}>
            { col1Buttons.map((line, i) => (
              <View key={i} style={styles.line}>
                { line.map((op, y) => (
                  <TouchableOpacity key={y} style={styles.btn} onPress={() => this.handleOp(op)}>
                    <Text style={styles.btnText}>{op}</Text>
                  </TouchableOpacity>
                )) }
              </View>
            )) }
          </View>
          <View style={styles.col2}>
            { col2Buttons.map((op, i) => (
              <TouchableOpacity key={i} style={styles.btn} onPress={() => this.handleOp(op)}>
                  <Text style={styles.btnText}>{op}</Text>
              </TouchableOpacity>
            )) }
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

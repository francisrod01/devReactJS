import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import logo from './assets/logo.png'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		<View style={styles.body}>
			<Image source={logo} />
			<Text style={styles.ip}>IP</Text>
			<Button title='Discover my IP' />
		</View>
		<View style={styles.footer}>
			<Text style={styles.made}>
				Made by Francis Rodrigues
			</Text>
		</View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ip: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  made: {
    color: 'white',
    textAlign: 'center',
  },
})

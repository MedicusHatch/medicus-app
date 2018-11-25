import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import NotificationsManager from '../utils/NotificationsManager'

class RootView extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  constructor(){
    super()
  }
  componentDidMount(){
    NotificationsManager.createDefaultChannel()
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={NotificationsManager.scheduleAppointmentConfirmationPN}
          title="Book Appointment"
        />
        <Button
          onPress={NotificationsManager.scheduleAppointmentConfirmationPN}
          title="Appointment Confirmation PN"
        />
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
})

export default RootView

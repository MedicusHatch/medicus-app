import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

import HeaderText from 'app/components/HeaderText'
import NotificationsManager from 'app/utils/NotificationsManager'

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
        <HeaderText>Root</HeaderText>
        <Button
          onPress={this.gotoBookAppointmentView}
          title="Book Appointment"
        />
        <Button
          onPress={NotificationsManager.scheduleAppointmentConfirmationPN}
          title="Appointment Confirmation PN"
        />
      </View>
    )
  }
  gotoBookAppointmentView = () => this.props.navigation.navigate('BookAppointmentView')
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

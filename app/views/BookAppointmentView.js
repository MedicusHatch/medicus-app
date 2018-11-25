import React from 'react'
import { View, StyleSheet } from 'react-native'

import HeaderText from 'app/components/HeaderText'

class BookAppointmentView extends React.Component {
  static navigationOptions = {
    title: 'Book an Appointment'
  }
  render(){
    return (
      <View style={styles.container}>
        <HeaderText>Westminster Clinic</HeaderText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default BookAppointmentView

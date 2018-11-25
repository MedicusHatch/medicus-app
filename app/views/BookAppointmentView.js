import React from 'react'
import { View, StyleSheet } from 'react-native'

import HeaderText from 'app/components/HeaderText'
import NormalText from 'app/components/NormalText'
import TimePicker from 'app/components/TimePicker'

class BookAppointmentView extends React.Component {
  static navigationOptions = {
    title: 'Book an Appointment'
  }
  constructor(){
    super()
    this.state = {
      startTime: 9
    }
  }
  render(){
    const { startTime } = this.state
    return (
      <View style={styles.container}>
        <HeaderText>Westminster Clinic</HeaderText>
        <NormalText>
          Notify me if there are available appointments between:
        </NormalText>
        <TimePicker
          selectedValue={startTime}
          onValueChange={this.onValueChange}
        />
      </View>
    )
  }
  onValueChange = (field) => newVal => this.setState({ [field]: newVal })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default BookAppointmentView

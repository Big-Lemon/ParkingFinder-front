import React, { PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';

const styles = StyleSheet.create({

});

const Settings = (props) => {
  const { visible, requestClose } = props

  return (
    <Modal
      animationType='slide'
      visible={visible}>
        <View style={[styles.container]}>
          <View style={[styles.innerContainer]}>
            <Text>Settings</Text>
            <TouchableOpacity
              onPress={requestClose}>
            <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Modal>
  )
}

Settings.PropTypes = {
  visible: PropTypes.bool.isRequired,
  requestClose: PropTypes.func,
}

export default Settings
import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
// Import SendIntentAndroid if needed, it's not used in the provided code

const CheckoutModal = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [society, setSociety] = useState('');
  const [flatNumber, setFlatNumber] = useState('');

  const sendWhatsAppMessage = (link) => {
    console.log(link);
    if (link) {
      Linking.canOpenURL(link)
        .then(supported => {
          if (!supported) {
            Alert.alert(
              "Please install WhatsApp to send a direct message to students via WhatsApp"
            );
          } else {
            return Linking.openURL(link);
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
    }
  };

  const handleCheckout = () => {
    const message = `I would like to order: .\n`;
    const link = "https://wa.me/919888563650?text=%7B0%7D+Balaji+CTest";
    sendWhatsAppMessage(link);
    // onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Checkout</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Society"
            value={society}
            onChangeText={text => setSociety(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Flat Number"
            value={flatNumber}
            onChangeText={text => setFlatNumber(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleCheckout}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={onClose}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e78e3d',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 19,
    color: '#fff',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default CheckoutModal;

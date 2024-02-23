import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { emptyCart } from '../../../Redux/Slices/cartSlice';
const CheckoutModal = ({ visible, onClose, order,compOrder}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [society, setSociety] = useState('');
  const dispatch = useDispatch();
  const [flatNumber, setFlatNumber] = useState('');
  const totalPrice = useSelector(state => state.cart.totalPrice);
const openWhatsApp = (message) => {
  let msg = message;
  let mobile = "9888563650";
  if (mobile) {
    if (msg) {
      let url =
        "whatsapp://send?text=" +
        msg +
        "&phone=91" +
        mobile;
      Linking.openURL(url)
        .then(data => {
          console.log("WhatsApp Opened successfully " + msg);
        })
        .catch((err) => {
          console.log(err)
          Alert.alert("Make sure WhatsApp installed on your device");
        });
    } else {
      Alert.alert("Please enter message to send");
    }
  } else {
    Alert.alert("Please enter mobile no");
  }
};
  const sendWhatsAppMessage = (message) => {
    const link = `https://wa.me/9888563650?text=${encodeURIComponent(message)}`;
    console.log(link);
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
  };

  const handleCheckout = () => {

    if(!name || !phoneNumber|| !society || !flatNumber)
    {
      Alert.alert("Enter the details Properly !")
      return ;
    }
    const address = { society, flatNumber }; // Create an object with address details

    let  formedString =""; 

    order.map((orderItem)=>{
       formedString += orderItem.quantity ; 
       formedString+= "-  "
       formedString += orderItem.name ; 
       formedString+= " "
       formedString += "Rs "
       formedString+= orderItem.price ;
       formedString += "\n";
    })
   
   
    
    const message = `I would like to order:\n${formedString}\nTotal Payable :Rs ${totalPrice}\n
    Contact Details :\nName: ${name}\nPhone Number: ${phoneNumber}\nAddress: ${JSON.stringify(address)}`;

   
    openWhatsApp(message);
    compOrder();
    onClose();
    dispatch(emptyCart());

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
            placeholderTextColor={"black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="phone-pad"
            placeholderTextColor={"black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Society"
            value={society}
            onChangeText={text => setSociety(text)}
            placeholderTextColor={"black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Flat Number"
            value={flatNumber}
            onChangeText={text => setFlatNumber(text)}
            placeholderTextColor={"black"}
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
    color:"black",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    // placeholderTextColor:"black"
  },
  button: {
    backgroundColor: '#e78e3d',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    color:"black",
  },
  buttonText: {
    fontSize: 19,
    // color: '#fff',
    textAlign: 'center',
    color:"black",
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    color:"black",
  },
});

export default CheckoutModal;

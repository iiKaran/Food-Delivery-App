import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFromCart,
  addToCart,
  emptyCart,
} from '../../../Redux/Slices/cartSlice';
import {Minus, Phone, Plus} from 'react-native-feather';
import CheckoutModal from './CheckoutModal';

const CartScreen = () => {
  const [modal, setmodal] = useState(false);
  const [order,setOrder]= useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  function populateOrderCheckOutModal(){
    
    const formedOrder = [];
    cartItems.map((item)=>{
      
      const tempItem ={}
      tempItem.name = item.name ;
      tempItem.quantity= item.quantity ; 
      tempItem.price= item.quantity * item.price ; 
      formedOrder.push(tempItem); 

    })
    setOrder(formedOrder);

    setmodal(true);
  }
  const renderItem = ({item}) =>
    item && (
      
      <View
        style={styles.item}
        className=" mt-2 w-[98vw] mx-auto py-4 px-2 pr-4 "
        key={item.id} >
        <View className="flex flex-row gap-3 items-center">
          {
            console.log(item)
          }
          {item.image && (
            <Image
              className="h-20 w-[120px]  rounded-full  pt-2 "
              source={{uri: item.image}}
            />
          )}
          <Text className="text-black w-[100px]">{item.name} </Text>
        </View>
        <View className=" flex items-center gap-2">
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() =>
                dispatch(removeFromCart({id: item.id, price: item.price}))
              }>
              <View
                style={styles.quantityBtn}
                className="text-[19px] font-[800]  bg-[#e78e3d] rounded-full">
                <Minus stroke={'white'}></Minus>
              </View>
            </TouchableOpacity>
            <Text style={styles.quantity} className="text-black">{item.quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  addToCart({id: item.id, name: item.name, price: item.price}),
                )
              }>
              <View
                style={styles.quantityBtn}
                className="text-[19px] font-[800]  bg-[#e78e3d] rounded-full">
                <Plus stroke={'white'}></Plus>
              </View>
            </TouchableOpacity>
          </View>
          <Text className="font-bold text-[19px] text-black">
            {'\u20B9' + ' ' + item.price} for one
          </Text>
        </View>
      </View>
    );

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return !modal ? (
    <View style={styles.container}>
      <View className="flex-row items-center justify-between     px-3 h-[20vh] pb-2">
        <Image
          className="w-[100px] h-[120px] rounded-full"
          source={{
            uri: 'https://thumbs.dreamstime.com/b/plate-fork-spoon-restaurant-logo-white-background-eps-plate-fork-spoon-restaurant-logo-193685698.jpg',
          }}
        />
        <View className="flex flex-row gap-2 ">
          <TouchableOpacity className="rounded-md py-2 px-3  cursor-pointer  ">
            <View>
              <Phone stroke={'black'} fontSize={'120px'}></Phone>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText} className="text-black font-bold">Your Cart is empty</Text>
          <Text style={styles.emptyText} className="text-black font-bold">Let get together to Eat More</Text>
        </View>
      ) : (
        <>
          { cartItems.length!==0 && (
            <Text style={styles.header} >Ready to Checkout</Text>
          )}
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item?.id?.toString()}
          />
          <View className="flex flex-row items-center px-3 py-6  justify-between">
            <Text style={styles.totalPrice} className="text-black">Total Price:  {`${'\u20B9'} ${totalPrice}`}</Text>
            <TouchableOpacity
              className="px-3 rounded-md py-2  cursor-pointer  bg-[#e78e3d]"
              onPress={populateOrderCheckOutModal}
              >
              <Text className="text-[19px]  text-white">Checkout</Text>
            </TouchableOpacity>
          </View>
          {/* <Button title="Empty Cart" onPress={handleEmptyCart} /> */}
        </>
      )}
    </View>
  ) : (
    <CheckoutModal
      onClose={() => {
        setmodal(false);
      }} order={order} compOrder={()=>{
        setOrder(null);
      }}></CheckoutModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color:"black"
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
  
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityBtn: {
    fontSize: 20,
    color: '#e78e3d',
    marginHorizontal: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default CartScreen;

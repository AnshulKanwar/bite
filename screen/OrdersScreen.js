import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons"

const OrdersScreen = () => {
  
  let sum = 0
  const [isChecked, setIsChecked] = useState(false)
  const [total, settotal] = useState(0)
  const toggleIsChecked = () => {
    if(isChecked)
      settotal(total - 30)
    else
      settotal(total + 30)
    setIsChecked(value => !value)
  }
  
  const cart = [
    {
      name: "Cheese French Fries",
      quantity: 2,
      amount: 120
    },
    {
      name: "Hot Coffee",
      quantity: 2,
      amount: 100
    },
    {
      name: "Spring Roll",
      quantity: 2,
      amount: 90
    },
    {
      name: "Masala Tea",
      quantity: 1,
      amount: 12
    }
  ]

  return (
    // <View style={styles.container}>
    <View>
      <Text style={styles.heading}>Your Cart</Text>
      <View style={styles.container}>
        <View style={styles.mainOrder}>
          <Text style={styles.resName}>Jaggi</Text>
          {
            cart.map((element, index) => {
              sum += element.amount;
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.txt}>{element.quantity} x {element.name}</Text>
                  <Text style={styles.txt}>₹{element.amount}</Text>
                </View>
              )
            })
          }
        </View>
        <View style={styles.container}>
          <View style={styles.mainOrder}>
            <Text style={styles.resName}>Important <Feather name="alert-triangle" size={20}/> </Text>
            <Text style={styles.row}>Your table will be reserved for 30 minutes after 15 minutes of placing your order</Text>
            <View style={styles.row}>
              <Text style={styles.txt}>Reserve table</Text>
              <Text style={styles.txt}> <Switch value={isChecked} onValueChange={toggleIsChecked} /> </Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.mainOrder}>
            <View style={styles.row}>
              <Text style={styles.boldtxt}>Subtotal</Text>
              <Text style={styles.boldtxt}>₹{total + sum}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.txt}>GST (18%)</Text>
              <Text style={styles.txt}>₹{Math.ceil(0.18*(total + sum))}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.boldtxt}>Grand Total</Text>
              <Text style={styles.boldtxt}>₹{total + Math.ceil(0.18*(total + sum)) + sum}</Text>
            </View>
          </View> 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    // paddingBottom: 20
  },
  heading: {
    margin: 20,
    marginTop: 70,
    fontSize: 30,
    fontWeight: "bold"
  },
  mainOrder: {
    justifyContent: "center",
    width: "90%",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    fontSize: 16
  },
  resName: {
    paddingLeft: 20,
    paddingBottom: 17,
    fontSize: 25,
    fontWeight: "bold"
  },
  txt: {
    fontSize: 17
  },
  boldtxt: {
    fontSize: 17,
    fontWeight: "bold"
  }
})

export default OrdersScreen;

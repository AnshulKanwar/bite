import { View, Text, StyleSheet } from "react-native";

const OrdersScreen = () => {

  let total = 0;

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
            cart.map((element) => {
              total += element.amount;
              return (
                <View style={styles.row}>
                  <Text style={styles.txt}>{element.quantity} x {element.name}</Text>
                  <Text style={styles.txt}>₹{element.amount}</Text>
                </View>
              )
            })
          }
        </View> 
        <View style={styles.container}>
          <View style={styles.mainOrder}>
              <View style={styles.row}>
                <Text style={styles.boldtxt}>Subtotal</Text>
                <Text style={styles.boldtxt}>₹{total}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}>GST (18%)</Text>
                <Text style={styles.txt}>₹{Math.ceil(0.18*total)}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.boldtxt}>Grand Total</Text>
                <Text style={styles.boldtxt}>₹{total + Math.ceil(0.18*total)}</Text>
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
    paddingBottom: 20
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

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { decrement, increment,defaultdata } from "../Redux/actions";
import store from "../Redux/store";
import { Styles } from "./Styles";
import Navigationstrings from "../Navigation/Navigationstrings";

const DemoScreen = ({ navigation, route }) => {

  const storeData = useSelector(state => state.myData)

  const onInc = (item) => {
      store.dispatch(increment(item.quantity, item.id))
  }
  const onDec = (item) => {
      store.dispatch(decrement(item.quantity, item.id))
  }

  const renderItem = ({ item, index }) => {
      return (
          <TouchableOpacity
           onPress={() => { navigation.navigate(Navigationstrings.DETAIL,{ id:item.id ,Title:item.Title,data:item.data})}}
            style={Styles.flatstyle}>
              <Text>Title :{item?.Title}</Text>
              <Text>Data:{item.data}</Text>
              {item.quantity>=1 ? <View style={Styles.bview}>
                  <TouchableOpacity style={Styles.bstyle}
                      onPress={() => onDec(item)} >
                      <Text style={Styles.btnText}>-</Text>
                  </TouchableOpacity>
                  <Text>  {item.quantity}</Text>
                  <TouchableOpacity style={Styles.bstyle} onPress={() => onInc(item)}>
                      <Text style={Styles.btnText}>+</Text>
                  </TouchableOpacity>
              </View>
                  : <View style={Styles.additembtnview}>
                      <TouchableOpacity style={Styles.additembtn} onPress = {() => onInc(item)}>
                          <Text style={Styles.btnText}>Add item</Text>
                      </TouchableOpacity>
                  </View>}
          </TouchableOpacity>
      )
  }

  return (
      <View  style={{ flex: 1 }}>
          <FlatList
              data={storeData}
              renderItem={renderItem}
          />
      </View>
  )
}
export default DemoScreen
         
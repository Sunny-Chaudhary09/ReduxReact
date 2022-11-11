import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './Styles'
import { useSelector } from 'react-redux'
import store from '../Redux/store'
import { decrement, increment } from '../Redux/actions'


export default function Details({navigation , route}) {
  let details=route.params
  
  console.log("data from previous screen ", details)

  const storeData = useSelector(state => state.myData)
  const index=storeData.findIndex(target => target.id ==details.id)
  const targetval= storeData[index]

  const onInc = (targetval) => {
    store.dispatch(increment(targetval.quantity, targetval.id))
}
const onDec = (targetval) => {
    store.dispatch(decrement(targetval.quantity, targetval.id))
}

  return (
    <View style={Styles.detailscreenview}>
      <Text>{details.Title}</Text>
      <Text>{details.data}</Text>

      <View style={Styles.bview}>
                  <TouchableOpacity style={Styles.bstyle}
                      onPress={() => onDec(targetval)} >
                      <Text style={Styles.btnText}>-</Text>
                  </TouchableOpacity>
                  <Text>  {targetval.quantity}</Text>
                  <TouchableOpacity style={Styles.bstyle} onPress={() => onInc(targetval)}>
                      <Text style={Styles.btnText}>+</Text>
                  </TouchableOpacity>
              </View>

    </View>
    
  )
}
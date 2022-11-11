import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Routes from "./src/Navigation/Route";
import store from "./src/Redux/store";
import { defaultdata } from "./src/Redux/actions";
import { AsyncStorage } from "react-native";
import types from "./src/Redux/types";


function App() {

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    try {
      
      const res = await AsyncStorage.getItem('userData')
      console.log("my storage value", JSON.parse(res))

      if(!!res){
        store.dispatch(defaultdata({
          type: types.DEFAULTDATA,
          payload: JSON.parse(res)
        }))
      }
    } catch (error) {
      console.log("error rasied", error)
    }
  }
  
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  )

   
}

export default App
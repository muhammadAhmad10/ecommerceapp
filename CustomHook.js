import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const CustomHook = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
      //saveLocal();
  }, [url]);

  return [data];
};

const saveLocal = async ()=>{
    await AsyncStorage.setItem('Items', JSON.stringify(data))
}


export default CustomHook;

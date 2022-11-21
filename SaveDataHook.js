import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomHook from "./CustomHook";

const [data] = CustomHook("https://fakestoreapi.com/products");
const SaveDataHook =async (data) => {
    await AsyncStorage.setItem('Items', JSON.stringify(data))
};


export default SaveDataHook;

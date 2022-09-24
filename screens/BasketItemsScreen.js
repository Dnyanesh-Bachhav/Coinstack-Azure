import axios from "axios";
import react,{useState,useEffect} from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';
import BasketMenuItem from "../components/BasketItemsScreen/BasketMenuItem";
import Header from "../components/BasketItemsScreen/Header";
import { MostGainedCoins2,profitCoins,lossCoins,trustedCoins,memeCoins } from '../components/constants';
import { getHighLossCoins, getHighProfitCoins,getTrustedCoins,getMemeCoins, getHighVolumeCoins } from "../Services/backend";
function BasketItems({route}){
    const screenName = route.params.screenName;
    const [arrayData,setArrayData ] = useState([]);
    async function getHighProfitCoins1(){
        const data = await getHighProfitCoins();
        setArrayData(data);
        // console.log(data[0].name); 
    }
    async function getTrustedCoins1(){
        const data = await getTrustedCoins();
        setArrayData(data);
        // console.log(data[0].name); 
    }
    async function getHighLossCoins1(){
        const data = await getHighLossCoins();
        setArrayData(data);
        // console.log(data[0].name); 
    }
    async function getMemeCoins1(){
        const data = await getMemeCoins();
        setArrayData(data);
        // console.log(data[0].name); 
    }
    async function getHighVolumeCoins1(){
        const data = await getHighVolumeCoins();
        setArrayData(data);
        // console.log(data[0].name); 
    }
    useEffect(()=>{
        if( screenName === "High Volume")
        {
            console.log("High Volume Coins");
            getHighVolumeCoins1();
        }
        if( screenName === "High Profit coins")
        {
            console.log("High Profit Coins");
            
            getHighProfitCoins1();
            // setArrayData(profitCoins);
        }
        if( screenName === "High Loss coins")
        {
            console.log("High Loss Coins");
            
            getHighLossCoins1();
        }
        if( screenName === "Trusted Coins")
        {
            console.log("Trusted Coins");
            
            getTrustedCoins1();
        }
        if( screenName === "Meme Coins")
        {
           
            console.log("Meme Coins");
            
            getMemeCoins1();
        }
    },[]);
    return(
        <View style={styles.container}>
            <Header name={ route.params.screenName } imgSrc={route.params.imgSrc} />
            <FlatList
                data={arrayData}
                renderItem={({item})=>(
                    <BasketMenuItem name={item.name} price={item.price} percentage={item.percentage} imgSrc={item.imgSrc ||"https://assets.coingecko.com/coins/images/1372/large/WAX_Coin_Tickers_P_512px.png" } shortName={item.shortName}  />
                )}
                style={ styles.listStyle }
                keyExtractor={(item,index)=>index}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    listStyle:{
        padding: 10
    }
})
export default BasketItems;
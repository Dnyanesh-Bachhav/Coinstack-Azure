import axios from "axios";
const getHighProfitCoins = async ()=>{
    try{
        const response = await axios.get("http://10.0.3.90:3000/MostGainedCoinsFetch");
        console.log(response.data);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
const getTrustedCoins = async ()=>{
    try{
        const response = await axios.get("http://10.0.3.90:3000/TrustedCoinsFetch");
        console.log(response.data);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}
const getHighLossCoins = async ()=>{
    try{
        const response = await axios.get("http://10.0.3.90:3000/MostLossedCoinsFetch");
        console.log(response.data);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}

const getMemeCoins = async ()=>{
    try{
        const response = await axios.get("http://10.0.3.90:3000/MemeCoinsFetch");
        console.log(response.data);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}


const getHighVolumeCoins = async ()=>{
    try{
        const response = await axios.get("http://10.0.3.90:3000/HighVolumeCoinsFetch");
        console.log(response.data);
        return response.data;
    }
    catch(e){
        console.log("Error"+e);
    }
}

export {getHighProfitCoins, getTrustedCoins,getHighLossCoins,getMemeCoins,getHighVolumeCoins};
import React,{useRef} from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import {COLORS} from './constants';
const BANNER_HEIGHT = Dimensions.get('window').height/6;
import Carousel from 'react-native-snap-carousel';
import {MostGainedCoins,banners  } from '../components/constants';
const AZURE_STORAGE_KEY = "h9GKNWR/zepicNKZnI3DBf+qpQy62NcOtZ5W+bKKv+REh97ibXs9bR4ng16EgMYkgyb9laXLmK6t+AStgWhtgw==";
const AZURE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=coinstack;AccountKey=h9GKNWR/zepicNKZnI3DBf+qpQy62NcOtZ5W+bKKv+REh97ibXs9bR4ng16EgMYkgyb9laXLmK6t+AStgWhtgw==;EndpointSuffix=core.windows.net";
function Banner(){
  const CardItem = ({item,index})=>{
    console.log(item.imgSrc);
    return(
      <View style={styles.container} >
        {/* <Text>{index+" "+item.name}</Text> */}
        <Image source={{
          uri: item.imgSrc
        }} 
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover'
        }}
        />
      </View>
    );
  }
  const ref = useRef(null);
  return(
    <View>
        {/* <View style={styles.bannerDotsView} >
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
            <View style={styles.bannerDot}></View>
        </View> */}
        <View style={{ justifyContent: 'center' }}>
                <Carousel
                  layout={"default"}
                  ref={ref}
                  data={banners}
                  sliderWidth={350}
                  itemWidth={300}
                  renderItem={CardItem}
                  // onSnapToItem = { index => this.setState({activeIndex:index}) } 
                  />
            </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: BANNER_HEIGHT,
    backgroundColor: COLORS.gray,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
  },
  bannerDotsView:{
    position: 'absolute',
    bottom: 2,
    width: '100%',
    height: 12,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bannerDot:{
    width: 8,
    height: 8,
    backgroundColor:COLORS.white,
    marginLeft: 5,
    borderRadius: 50
  }
});
export default Banner;
import react,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, StatusBar, AppRegistry, LogBox } from 'react-native';
import { COLORS } from './components/constants';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Navigation/tabs';
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from './screens/NoInternetScreen';
import PortfolioContextProvider from './Contexts/PortfolioContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName,()=>App);

// LogBox.ignoreLogs([
// "ViewPropTypes will be removed",
// "ColorPropType will be removed",
// ]);

export default function App() {
  const [connected,setConnected] = useState(true);
  async function getNetworkData(){
    const data = await NetInfo.fetch();
    setConnected(data.isConnected);
  }
  useEffect(()=>{
    getNetworkData();
  },[]);
  return (
    <GestureHandlerRootView style={styles.container}>
    {
      connected ?
      <>
      <PortfolioContextProvider>
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
      </PortfolioContextProvider>
      </>
    : <NoInternetScreen/>
    
    
  }
    <StatusBar style="auto" backgroundColor={COLORS.primary} styles={styles.statusBarStyle} />
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarStyle:{
    backgroundColor: COLORS.primary,
  }
});

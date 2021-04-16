import React from 'react'
import { Provider } from 'react-redux'
import {store,persistor} from './redux/store/configureStore'
import FirstPage from './pages/FirstPage'
import { PersistGate } from 'redux-persist/integration/react';
import Loginanimation from './pages/Loginanimation'
import SplashScreen from './pages/SplashScreen'
import ParallelAnimation from './pages/ParallelAnimation'
import TimingAnimation from './pages/TimingAnimation'
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      
     
      <TimingAnimation/>
      </PersistGate>
    </Provider>
  )
}
export default App;

import  Router  from './config/router';
import './App.css';
import { store,persistor } from './store';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

 

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div>

    <Router/>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;

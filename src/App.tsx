import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { store } from './redux/store';
import { Provider } from 'react-redux';


function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <View>
        <Text>Test</Text>
      </View>
    </Provider>
  );
}

export default App;

import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import RootNavigator from './navigation/RootNavigator';


function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;

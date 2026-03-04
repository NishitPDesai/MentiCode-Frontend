import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store';

export function AppProviders({ children }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
}

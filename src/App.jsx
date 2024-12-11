import { Provider } from 'react-redux';
import CardsDisplay from './pages/cardDisplay/index';
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './redux/cardsStore/cardsSlice';


const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

function App() {

  return (
    <Provider store={store}>
      <CardsDisplay/>
    </Provider>
  )
}

export default App

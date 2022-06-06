import './App.css';
import Cards from './Cards';
import Header from './Header';
import SwipeButton from './SwipeButton';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* Header */}
      <Header />

      {/* FlashCards */}
      <Cards />

      {/* SwipeButton */}
      <SwipeButton />

    </div>
  );
}

export default App;

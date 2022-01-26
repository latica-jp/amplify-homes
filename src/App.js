import './App.css';
import { MarketingFooter, NavBar, NewHomes } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NewHomes isPaginated itemsPerPage={3} />
      <MarketingFooter />
    </div>
  );
}

export default App;

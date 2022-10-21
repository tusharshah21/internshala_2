import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header.js';
import Stats from './Pages/Stats.js';
import Proposal from './Pages/Proposal.js';
import Review from './Pages/Review';
function App() {
  return (
    <div>
      <Header/>
      <div className="major">
      <Stats/>
      <Proposal/>
      <Review/>
      </div>
          </div>
  );
}

export default App;

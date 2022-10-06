import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:companyId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

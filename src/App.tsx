import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopBar from './components/Topbar';
import './App.css';

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<h2 style={{ color: 'black' }}>Home Page Test</h2>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

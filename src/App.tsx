import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import { MainPageAsync } from './pages/MainPage';
import { AboutPageAsync } from './pages/AboutPage';

const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

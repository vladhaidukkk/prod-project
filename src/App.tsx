import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPageAsync } from './pages/MainPage';
import { AboutPageAsync } from './pages/AboutPage';
import { useTheme } from './theme';
import { cn } from './helpers/cn';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </nav>

      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>

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

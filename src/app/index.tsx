import { Link } from 'react-router-dom';
import Routing from 'pages';
import { clsx } from 'shared/utils/clsx';
import { useTheme } from 'shared/config/theme';
import './index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx('app', {}, [theme])}>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </nav>

      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>

      <Routing />
    </div>
  );
};

export default App;

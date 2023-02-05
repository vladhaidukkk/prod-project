import { Link } from 'react-router-dom';
import Routing from 'pages';
import { clsx } from 'shared/utils/clsx';
import { useTheme } from 'shared/config/theme';
import './index.scss';
import { RouteNames, RoutePaths } from 'shared/config/routes';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx('app', {}, [theme])}>
      <nav>
        <Link to={RoutePaths[RouteNames.Main]}>Main</Link>
        <Link to={RoutePaths[RouteNames.About]}>About</Link>
      </nav>

      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>

      <Routing />
    </div>
  );
};

export default App;

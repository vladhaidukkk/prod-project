import Routing from 'pages';
import { clsx } from 'shared/utils/clsx';
import { useTheme } from 'shared/config/theme';
import { Navbar } from 'widgets/navbar';
import './index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx('app', {}, [theme])}>
      <Navbar />

      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>

      <Routing />
    </div>
  );
};

export default App;

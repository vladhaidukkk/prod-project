import { clsx } from 'shared/utils/clsx';
import { useTheme } from 'shared/config/theme';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Routing } from './routes';
import './index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', {}, [theme])}>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Routing />
      </div>
    </div>
  );
};

export default App;

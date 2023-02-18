import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Routing } from './routes';
import cls from './app.module.scss';

export const App = () => {
  return (
    <div className={cls.app}>
      <Navbar />
      <div className={cls.appContent}>
        <Sidebar />
        <Routing />
      </div>
    </div>
  );
};

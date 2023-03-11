import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Routing } from './routes';
import cls from './app.module.scss';
import { useEffect } from 'react';
import { LOCAL_STORAGE_VIEWER_KEY } from 'shared/consts/local-storage';
import { authActions } from 'entities/auth';
import { useAppDispatch } from 'shared/utils/hooks';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const viewer = localStorage.getItem(LOCAL_STORAGE_VIEWER_KEY);

    if (viewer) {
      dispatch(authActions.authenticated(JSON.parse(viewer)));
    }
  }, [dispatch]);

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

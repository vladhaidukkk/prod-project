import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Routing } from './routes';
import cls from './app.module.scss';
import { useEffect } from 'react';
import { LOCAL_STORAGE_VIEWER_KEY } from 'shared/consts/local-storage';
import { authActions, selectAuthInitialized } from 'entities/auth';
import { useAppDispatch, useAppSelector } from 'shared/utils/hooks';

export const App = () => {
  const dispatch = useAppDispatch();
  const initialized = useAppSelector(selectAuthInitialized);

  useEffect(() => {
    const viewer = localStorage.getItem(LOCAL_STORAGE_VIEWER_KEY);
    dispatch(authActions.initialized(viewer ? JSON.parse(viewer) : undefined));
  }, [dispatch]);

  return (
    <div className={cls.app}>
      <Navbar />
      <div className={cls.appContent}>
        <Sidebar />
        {initialized && <Routing />}
      </div>
    </div>
  );
};

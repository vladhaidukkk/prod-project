import { loginActions, loginByUsername, loginReducer, selectLoginState } from '../../model';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';
import { clsx } from 'shared/utils/clsx';
import cls from './login-form.module.scss';
import { type AsyncReducersMap, useAsyncReducers, useAppDispatch } from 'shared/utils/hooks';

// It won't cause redundant re-rendering as it's always the same ref. In our case it's not very important because useAsyncReducers hook don't have reducers as a dependency for inner useEffect.
const asyncReducers: AsyncReducersMap = {
  login: {
    reducer: loginReducer,
    destroy: true,
  },
};

export type LoginFormProps = {
  onSuccess: () => void;
};

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // Component will rerender on each loginState change because we select the whole state (even if we don't use password for example). That's why it's better to split selectors on atoms (the smallest units). In this case we can select the whole state because we use all fields from there.
  const { username, password, loading, error } = useSelector(selectLoginState);

  useAsyncReducers(asyncReducers);

  const changeUsernameHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.usernameSet(value));
    },
    [dispatch]
  );

  const changePasswordHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.passwordSet(value));
    },
    [dispatch]
  );

  const loginHandler = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <div className={clsx(cls.loginForm, {}, [])}>
      <Text title={t('Login Form')} />
      {error && <Text text={t('You entered the wrong login or password')} color="error" />}
      <Input
        value={username}
        onChange={changeUsernameHandler}
        placeholder={t('Enter username')}
        autofocus
      />
      <Input value={password} onChange={changePasswordHandler} placeholder={t('Enter password')} />
      <Button className={cls.loginBtn} variant="outlined" onClick={loginHandler} disabled={loading}>
        {t('Log in')}
      </Button>
    </div>
  );
});

export default LoginForm;

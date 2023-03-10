import { loginActions, loginByUsername, selectLoginState } from 'features/auth-by-username/model';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';
import { clsx } from 'shared/utils/clsx';
import cls from './login-form.module.scss';

export const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // Component will rerender on each loginState change because we select the whole state (even if we don't use password for example). That's why it's better to split selectors on atoms (the smallest units). In this case we can select the whole state because we use all fields from there.
  const { username, password, loading, error } = useSelector(selectLoginState);

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

  const loginHandler = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

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

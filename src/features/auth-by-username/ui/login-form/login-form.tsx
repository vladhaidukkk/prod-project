import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { clsx } from 'shared/utils/clsx';
import cls from './login-form.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={clsx(cls.loginForm, {}, [])}>
      <Input value={username} onChange={setUsername} placeholder={t('Enter username')} autofocus />
      <Input value={password} onChange={setPassword} placeholder={t('Enter password')} />
      <Button className={cls.loginBtn}>{t('Log in')}</Button>
    </div>
  );
};

import { profileReducer } from 'entities/profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { type ReducersRecord, useAsyncReducers } from 'shared/utils/hooks';

const asyncReducers: ReducersRecord = {
  profile: {
    reducer: profileReducer,
    destroy: true,
  },
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  useAsyncReducers(asyncReducers);

  return <div>{t('Profile Page')}</div>;
});

export default ProfilePage;

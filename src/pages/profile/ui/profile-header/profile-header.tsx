import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text';
import { Button } from 'shared/ui/button';
import cls from './profile-header.module.scss';
import { useAppDispatch, useAppSelector } from 'shared/utils/hooks';
import { profileActions, selectProfileReadonly, updateProfileData } from 'entities/profile';
import { useCallback } from 'react';

export const ProfileHeader = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useAppSelector(selectProfileReadonly);

  const editHandler = useCallback(() => {
    dispatch(profileActions.readonlySet(false));
  }, [dispatch]);

  const cancelEditHandler = useCallback(() => {
    dispatch(profileActions.editCanceled());
  }, [dispatch]);

  const saveHandler = useCallback(() => {
    void dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cls.profileHeader}>
      <Text title={t('Profile')} />
      {readonly ? (
        <Button variant="outlined" onClick={editHandler}>
          {t('Edit')}
        </Button>
      ) : (
        <div className={cls.buttonsGroup}>
          <Button variant="outlined" color="error" onClick={cancelEditHandler}>
            {t('Cancel')}
          </Button>
          <Button variant="outlined" onClick={saveHandler}>
            {t('Save')}
          </Button>
        </div>
      )}
    </div>
  );
};

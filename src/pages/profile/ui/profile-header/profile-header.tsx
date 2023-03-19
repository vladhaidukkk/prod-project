import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text';
import { Button } from 'shared/ui/button';
import cls from './profile-header.module.scss';
import { useAppDispatch, useAppSelector } from 'shared/utils/hooks';
import {
  profileActions,
  selectProfileData,
  selectProfileReadonly,
  updateProfileData,
} from 'entities/profile';
import { useCallback } from 'react';
import { selectAuthViewer } from 'entities/auth';

export const ProfileHeader = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const viewer = useAppSelector(selectAuthViewer);
  const profile = useAppSelector(selectProfileData);
  const readonly = useAppSelector(selectProfileReadonly);

  const canEdit = viewer?.id === profile?.id;

  const editHandler = useCallback(() => {
    dispatch(profileActions.readonlySet(false));
  }, [dispatch]);

  const cancelEditHandler = useCallback(() => {
    dispatch(profileActions.editCanceled());
  }, [dispatch]);

  const saveHandler = useCallback(() => {
    if (viewer) {
      void dispatch(updateProfileData(viewer.id));
    }
  }, [dispatch, viewer]);

  return (
    <div className={cls.profileHeader}>
      <Text title={t('Profile')} />
      {canEdit &&
        (readonly ? (
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
        ))}
    </div>
  );
};

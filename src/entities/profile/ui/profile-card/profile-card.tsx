import { selectProfileData } from 'entities/profile/model';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';
import { clsx } from 'shared/utils/clsx';
import cls from './profile-card.module.scss';

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(selectProfileData);

  return (
    <div className={clsx(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button variant="outlined">{t('Edit')}</Button>
      </div>
      <div className={cls.content}>
        <Input value={data?.first} placeholder={t('Your name')} />
        <Input value={data?.lastname} placeholder={t('Your surname')} />
      </div>
    </div>
  );
};

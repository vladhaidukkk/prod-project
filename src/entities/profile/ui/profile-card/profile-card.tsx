import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';
import { clsx } from 'shared/utils/clsx';
import cls from './profile-card.module.scss';
import { type Profile } from '../../types';
import { Loader } from 'shared/ui/loader';
import { Avatar } from 'shared/ui/avatar';
import { type Currency } from 'shared/consts/currency';
import { CurrencySelect } from 'entities/currency';
import { type Country } from 'shared/consts/country';
import { CountrySelect } from 'entities/country';

type ProfileCardProps = {
  className?: string;
  data?: Profile;
  loading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
};

export const ProfileCard = ({
  className,
  data,
  loading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (loading) {
    return (
      <div className={clsx(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(cls.profileCard, {}, [className, cls.error])}>
        <Text
          title={t('Failed to load profile data')}
          description={t('Try to reload the page')}
          color="error"
          align="center"
        />
      </div>
    );
  }

  return data ? (
    <div className={clsx(cls.profileCard, { [cls.editing]: !readonly }, [className])}>
      {data.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data.avatar} />
        </div>
      )}
      <Input
        value={data.first}
        placeholder={t('Your name')}
        readOnly={readonly}
        onChange={onChangeFirstname}
      />
      <Input
        value={data.lastname}
        placeholder={t('Your surname')}
        readOnly={readonly}
        onChange={onChangeLastname}
      />
      <Input
        type="number"
        value={data.age}
        placeholder={t('Your age')}
        readOnly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data.city}
        placeholder={t('Your city')}
        readOnly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data.username}
        placeholder={t('Your username')}
        readOnly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data.avatar}
        placeholder={t('Your avatar')}
        readOnly={readonly}
        onChange={onChangeAvatar}
      />
      <CurrencySelect value={data.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect value={data.country} onChange={onChangeCountry} readonly={readonly} />
    </div>
  ) : null;
};

import {
  fetchProfileData,
  profileActions,
  ProfileCard,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileLoading,
  selectProfileReadonly,
  selectProfileValidationErrors,
  ProfileValidationError,
} from 'entities/profile';
import { memo, useCallback } from 'react';
import { type Country } from 'shared/consts/country';
import { type Currency } from 'shared/consts/currency';
import {
  type AsyncReducersMap,
  useAsyncReducers,
  useAppDispatch,
  useInitialEffect,
} from 'shared/utils/hooks';
import { useAppSelector } from 'shared/utils/hooks';
import { Text } from 'shared/ui/text';
import { ProfileHeader } from './profile-header/profile-header';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const asyncReducers: AsyncReducersMap = {
  profile: {
    reducer: profileReducer,
    destroy: true,
  },
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectProfileForm);
  const loading = useAppSelector(selectProfileLoading);
  const error = useAppSelector(selectProfileError);
  const readonly = useAppSelector(selectProfileReadonly);
  const validationErrors = useAppSelector(selectProfileValidationErrors);

  const validationErrorTranslations: Record<ProfileValidationError, string> = {
    [ProfileValidationError.NoData]: t('Data was not provided'),
    [ProfileValidationError.IncorrectUserName]: t('Name or surname is incorrect'),
    [ProfileValidationError.IncorrectUserAge]: t('Age is incorrect'),
    [ProfileValidationError.IncorrectUserCountry]: t('Country is incorrect'),
  };

  useAsyncReducers(asyncReducers);

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id));
    }
  });

  const changeFirstnameHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.profileEdited({
          first: value,
        })
      );
    },
    [dispatch]
  );

  const changeLastnameHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.profileEdited({
          first: value,
        })
      );
    },
    [dispatch]
  );

  const changeAgeHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.profileEdited({
          age: Number(value),
        })
      );
    },
    [dispatch]
  );

  const changeCityHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.profileEdited({
          city: value,
        })
      );
    },
    [dispatch]
  );

  const changeUsernameHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.profileEdited({
          username: value,
        })
      );
    },
    [dispatch]
  );

  const changeAvatarHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.profileEdited({
          avatar: value,
        })
      );
    },
    [dispatch]
  );

  const changeCurrencyHandler = useCallback(
    (currency: Currency) => {
      dispatch(
        profileActions.profileEdited({
          currency,
        })
      );
    },
    [dispatch]
  );

  const changeCountryHandler = useCallback(
    (country: Country) => {
      dispatch(
        profileActions.profileEdited({
          country,
        })
      );
    },
    [dispatch]
  );

  return (
    <div>
      <ProfileHeader />
      {validationErrors?.map((err) => (
        <Text key={err} description={validationErrorTranslations[err]} color="error" />
      ))}
      <ProfileCard
        data={formData}
        loading={loading}
        error={error}
        readonly={readonly}
        onChangeFirstname={changeFirstnameHandler}
        onChangeLastname={changeLastnameHandler}
        onChangeAge={changeAgeHandler}
        onChangeCity={changeCityHandler}
        onChangeUsername={changeUsernameHandler}
        onChangeAvatar={changeAvatarHandler}
        onChangeCurrency={changeCurrencyHandler}
        onChangeCountry={changeCountryHandler}
      />
    </div>
  );
});

export default ProfilePage;

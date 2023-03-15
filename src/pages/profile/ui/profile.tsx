import {
  fetchProfileData,
  profileActions,
  ProfileCard,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileLoading,
  selectProfileReadonly,
} from 'entities/profile';
import { memo, useCallback, useEffect } from 'react';
import { type Country } from 'shared/consts/country';
import { type Currency } from 'shared/consts/currency';
import { type AsyncReducersMap, useAsyncReducers, useAppDispatch } from 'shared/utils/hooks';
import { useAppSelector } from 'shared/utils/hooks';
import { ProfileHeader } from './profile-header/profile-header';

const asyncReducers: AsyncReducersMap = {
  profile: {
    reducer: profileReducer,
    destroy: true,
  },
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectProfileForm);
  const loading = useAppSelector(selectProfileLoading);
  const error = useAppSelector(selectProfileError);
  const readonly = useAppSelector(selectProfileReadonly);

  useAsyncReducers(asyncReducers);

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

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

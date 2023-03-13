import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';
import { memo, useEffect } from 'react';
import { type AsyncReducersMap, useAsyncReducers, useAppDispatch } from 'shared/utils/hooks';

const asyncReducers: AsyncReducersMap = {
  profile: {
    reducer: profileReducer,
    destroy: true,
  },
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useAsyncReducers(asyncReducers);

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;

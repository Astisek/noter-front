'use client';
import { PropsWithChildren, useRef } from 'react';
import { IUserProfile } from '@/api/models/user';
import { createUserStore, UserStoreContext } from '@/stores/user.store';

interface ClientProviderProps {
  userProfile: IUserProfile;
}

export const ClientLoginProvider = ({ children, userProfile }: PropsWithChildren<ClientProviderProps>) => {
  const userStore = useRef(createUserStore({ profile: userProfile })).current

  return <UserStoreContext.Provider value={userStore}>{children}</UserStoreContext.Provider>;
};

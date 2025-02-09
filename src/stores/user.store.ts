'use client';
import { IUserProfile } from '@/api/models/user';
import React, { useContext } from 'react';
import { createStore, StoreApi, useStore } from 'zustand';

interface IUserState {
  profile: IUserProfile;
}
interface IUserStore extends IUserState {
  updateProfile: (profile: Partial<IUserProfile>) => void;
}

export const createUserStore = (init: IUserState) =>
  createStore<IUserStore>()((set) => ({
    ...init,
    updateProfile: (profile) => set((state) => ({ profile: { ...state.profile, ...profile } })),
  }));

export const UserStoreContext = React.createContext<StoreApi<IUserStore>>(null);

export const useUserStore = () => {
  const store = useContext(UserStoreContext);
  return useStore(store);
};

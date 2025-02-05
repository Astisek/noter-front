'use client';
import { IUserProfile } from '@/api/models/user';
import React, { useContext } from 'react';
import { createStore, StoreApi, useStore } from 'zustand';

interface IUserState {
  profile: IUserProfile;
}
interface IUserStore extends IUserState {
  updateProfile: (profile: IUserProfile) => void;
}

export const createUserStore = (init: IUserState) => {
  return createStore<IUserStore>()((set) => ({
    ...init,
    updateProfile: (profile: IUserProfile) => set({ profile }),
  }));
};

export const UserStoreContext = React.createContext<StoreApi<IUserStore>>(null);

export const useUserStore  = () => {
  const store = useContext(UserStoreContext)
  return useStore(store)
}
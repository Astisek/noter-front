'use client';
import { ICategory } from '@/api/models/category';
import { emptyCategory } from '@/data/emptyCategory';
import { create } from 'zustand';

interface ICategoryStore {
  categories: ICategory[];
  setCategories: (categories: ICategory[]) => void;
  addCategory: (category: ICategory) => void;
  deleteCategory: (id: string) => void;
  updateCategory: (id: string, category: ICategory) => void;
}

export const useCategoryStore = create<ICategoryStore>((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
  updateCategory: (id, category) =>
    set((state) => ({
      categories: state.categories.map((currentCategory) =>
        currentCategory.id === id ? { ...currentCategory, ...category } : currentCategory,
      ),
    })),
  addCategory: (category) => set((state) => ({ categories: [{ ...emptyCategory, ...category }, ...state.categories] })),
  deleteCategory: (categoryId) =>
    set((state) => ({ categories: state.categories.filter(({ id }) => id !== categoryId) })),
}));

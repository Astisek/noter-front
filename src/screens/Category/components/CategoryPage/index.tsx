'use client';
import { CheckLoading } from '@/components/CheckLoading/CheckLoading';
import { Header } from '@/components/Header';
import { CategoryHeader } from '@/screens/Category/components/CategoryHeader';
import { CategoryList } from '@/screens/Category/components/CategoryList';
import { useCategories } from '@/screens/Category/hooks/useCategories';
import { useCategoryStore } from '@/stores/category.store';
import { useState } from 'react';

export const CategoryPage = () => {
  const [search, setSearch] = useState('');
  const { isPending } = useCategories({ search });
  const { categories } = useCategoryStore();

  return (
    <div>
      <Header />

      <section className="container m-auto mt-10">
        <CategoryHeader search={search} onChangeSearch={setSearch} />

        <CheckLoading isLoading={isPending}>
          <CategoryList categories={categories} />
        </CheckLoading>
      </section>
    </div>
  );
};

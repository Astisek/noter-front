'use client';
import { PropsWithChildren, useEffect, useReducer, useState } from 'react';
import { NoteList } from '@/screens/NoteView/components/NoteList';
import { Header } from '@/components/Header';
import { useCategory } from '@/screens/NoteView/hooks/useCategory';
import { SortByEnum } from '@/api/models/note';
import { useNotes } from '@/screens/NoteView/hooks/useNotes';
import { CategoryName } from '@/screens/NoteView/components/NoteLayout/CategoryName';
import { NoteSearch } from '@/screens/NoteView/components/NoteLayout/NoteSearch';
import { CategoryActions } from '@/screens/NoteView/components/NoteLayout/CategoryActions';
import { CheckLoading } from '@/components/CheckLoading/CheckLoading';
import { CreateNote } from '@/screens/NoteView/components/CreateNote';

interface NoteLayoutProps {
  categoryId: string;
}

export const NoteLayout = ({ children, categoryId }: PropsWithChildren<NoteLayoutProps>) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(SortByEnum.Date);
  const [isOpenCreateModal, toggleIsOpenCreateModal] = useReducer((state) => !state, false);

  const { data: categoryData, isLoading: categoryIsLoading } = useCategory(categoryId);
  const { isFetching: notesIsLoading, refetch } = useNotes({ categoryId, search, sortBy });

  useEffect(() => {
    refetch();
  }, [search, sortBy, refetch]);

  return (
    <div className="w-full flex">
      <div className="w-1/4 min-w-80 bg-background-50 shadow-inner h-screen flex flex-col gap-2">
        <Header inNote />

        <CheckLoading isLoading={categoryIsLoading}>
          <CategoryName name={categoryData?.data?.name} />
        </CheckLoading>
        <NoteSearch search={search} onSearch={setSearch} />
        <CategoryActions setSortBy={setSortBy} sortBy={sortBy} onClickPlus={toggleIsOpenCreateModal} />
        <CheckLoading isLoading={notesIsLoading}>
          <NoteList />
        </CheckLoading>
      </div>
      {children}
      <CreateNote categoryId={categoryId} open={isOpenCreateModal} toggleOpen={toggleIsOpenCreateModal} />
    </div>
  );
};

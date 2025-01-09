'use client';

import Image from 'next/image';
import profilePlaceholder from '@/assets/images/profile-placeholder.png';
import { ReactComponent as Logout } from '@/assets/svg/upload.svg';
import { ReactComponent as Trash } from '@/assets/svg/trash.svg';
import { ReactComponent as Edit } from '@/assets/svg/edit.svg';
import { ReactComponent as Cross } from '@/assets/svg/cross.svg';
import { ReactComponent as Check } from '@/assets/svg/check.svg';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Link from 'next/link';
import s from './styles.module.scss';

export default function Page() {
  return (
    <div>
      <header className="container m-auto">
        <div className="p-2 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <Image
              src={profilePlaceholder}
              alt="Avatar"
              className="w-12 rounded-full"
            />
            <p className="text-ellipsis w-4/5 text-text text-lg">Astisek</p>
          </div>

          <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </header>
      <section className="container m-auto mt-10">
        <div className="flex gap-4 mb">
          <Button>Add category</Button>
          <Input placeholder="Search..." className="flex-1" />
        </div>

        <div className="flex flex-col gap-4 w-full mt-5">
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div className="w-full">
              <Input placeholder="Name..." className="w-full" />
            </div>
            <div className={s.editActions}>
              <Check className="stroke-text w-8 h-8" />
              <Cross className="stroke-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>

          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
          <Link href="#" className={s.card}>
            <div>
              <p className="text-xl text-text">Category name</p>
              <p className="text-gray-400 ">Items count: 40</p>
            </div>
            <div className={s.actions}>
              <Edit className="fill-text w-8 h-8" />
              <Trash className="fill-text w-8 h-8" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

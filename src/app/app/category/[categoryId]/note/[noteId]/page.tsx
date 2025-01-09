'use client';
import { ReactComponent as Logout } from '@/assets/svg/upload.svg';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Link from 'next/link';
import profilePlaceholder from '@/assets/images/profile-placeholder.png';
import Image from 'next/image';
import { Select } from '@/components/Select';
import { Editor } from '@/components/Editor';
import { ReactComponent as Trash } from '@/assets/svg/trash.svg';

export default function Page() {
  return (
    <div className="w-full flex">
      <div className="w-1/4 min-w-80 bg-background-50 shadow-inner h-screen flex flex-col  gap-2">
        <div className="border-b border-b-1 border-gray-600 p-2 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              src={profilePlaceholder}
              alt="Avatar"
              className="w-6 rounded-full"
            />
            <p className="text-ellipsis w-4/5 text-text">Astisek</p>
          </div>

          <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <div className="p-1">
          <div className="text-lg text-text text-center">Category Name</div>
        </div>

        <div className="px-2 py-1">
          <Input className="ring-1 w-full text-sm" placeholder="Search" />
        </div>

        <div className="px-2 py-1 flex justify-between items-center">
          <div>
            <Button size="small">+</Button>
          </div>
          <div>
            <Select
              options={[
                { label: 'по дате', value: 1 },
                { label: 'по названию', value: 2 },
              ]}
              className="text-sm"
            />
          </div>
        </div>

        {/* <div>
          <p className="text-sm px-2 py-1 text-gray-400 text-center">Empty</p>
        </div> */}

        <div className="flex-1 overflow-y-auto scroll">
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                ?<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
          >
            <div className="text-ellipsis overflow-hidden">
              NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
            </div>
            <div className="flex gap-3 items-center">
              <p className="border border-text px-2 rounded-sm">
                5<span className="text-gray-400">/10</span>
              </p>
              <p className="text-gray-400">20.12.2024</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 py-10 overflow-y-auto h-screen">
        <div className="px-32 w-full h-full flex flex-col">
          <div className="flex">
            <Input
              placeholder="Title..."
              className="text-3xl bg-background-100 ring-transparent flex-1"
            />
            <div className="flex items-center gap-2">
              <p className="text-gray-400">Дата изменения: 20.12.2024</p>
              <div className="flex items-center">
                <Select
                  options={[
                    { label: '1', value: 1 },
                    { label: '10', value: 10 },
                  ]}
                  className="p-2"
                  placeholder="?"
                />
                <p className="text-text text-2xl ">/10</p>
              </div>
              <Button variant="outline">
                <Trash className="fill-text w-5 h-5" />
              </Button>
            </div>
          </div>
          <Editor placeholder="Description..." className="flex-1" />
        </div>
      </div>
    </div>
  );
}

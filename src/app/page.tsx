'use client'
import { ReactComponent as Logout } from '@/assets/upload.svg';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full flex">
      <div className="w-1/4 min-w-80 bg-background-50 shadow-inner h-screen flex flex-col  gap-2">
        <div className="border-b border-b-1 border-gray-600 p-2 flex justify-between items-center">
          <p className="text-ellipsis w-4/5 text-text">Name</p>

          <Logout className="w-9 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <div className="px-2 py-1">
          <Input className="ring-1 w-full text-sm" placeholder="Search" />
        </div>

        <div className="px-2 py-1">
          <Button className="w-full py-2">Add note</Button>
        </div>

        <div>
          <p className="text-sm px-2 py-1 text-gray-400">List</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Link
            href={'#'}
            className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded"
          >
            <div>NoteItem</div>
            <div className=''>
              
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 py-10 overflow-y-auto h-screen">
        <div className="px-32 w-full h-full">
          <TextArea placeholder="Write some text..." />
        </div>
      </div>
      {/* <Modal onClose={() => {}} open /> */}
    </div>
  );
}

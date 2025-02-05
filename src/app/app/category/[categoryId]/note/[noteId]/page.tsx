import { Editor } from '@/components/Editor';
import { ReactComponent as Trash } from '@/assets/svg/trash.svg';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';

export default function Page() {
  return (
    <div className="flex-1 py-10 overflow-y-auto h-screen">
      <div className="px-32 w-full h-full flex flex-col">
        <div className="flex">
          <Input placeholder="Title..." className="text-3xl bg-background-100 ring-transparent flex-1" />
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
  );
}

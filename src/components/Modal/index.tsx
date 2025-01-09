'use client';

import { Button } from "@/components/Button";
import s from './styles.module.scss';

interface ModalProps {
  open: boolean;
  title: string;
  description: string;
  acceptText: string;
  cancelText: string;
  onAccept: () => void;
  onCancel: () => void;

}

export const Modal = ({
  open,
  description,
  title,
  onAccept,
  onCancel,
  acceptText,
  cancelText,
}: ModalProps) => {
  return open ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">

          {/*content*/}

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-background-100 outline-none focus:outline-none">
            
            {/*header*/}

            <div className="flex justify-between p-5 border-b border-solid border-background-50 rounded-t items-center">
              <h3 className="text-3xl font-semibold text-text">{title}</h3>
              <button
                className="p-1 ml-auto"
                onClick={onCancel}
              >
                <span className={s.close}>
                </span>
              </button>
            </div>

            {/*body*/}
            
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-text text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/*footer*/}
            
            <div className="flex items-center justify-end p-4 border-t border-solid border-background-50 rounded-b gap-4">
              <Button
                onClick={onCancel}
                size="small"
                variant="outline"
              >
                {cancelText}
              </Button>
              <Button className="py-2" onClick={onAccept} size="small">{acceptText}</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
};

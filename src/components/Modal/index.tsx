'use client';
import { Button } from '@/components/Button';
import s from './styles.module.scss';
import { PropsWithChildren } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

interface ModalProps {
  title: string;
  acceptText: string;
  cancelText: string;
  onAccept: () => void;
  onCancel: () => void;
  isLoadingAccept?: boolean;
}

export const Modal = ({
  title,
  onAccept,
  onCancel,
  acceptText,
  cancelText,
  children,
  isLoadingAccept,
}: PropsWithChildren<ModalProps>) => (
  <>
    <AnimatePresence>
      <motion.div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-auto my-6 max-w-3xl mx-4 sm:mx-auto">
          {/*content*/}

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-background-100 outline-none focus:outline-none">
            {/*header*/}

            <div className="flex justify-between p-3 border-b border-solid border-background-50 rounded-t items-center">
              <h3 className="text-2xl font-semibold text-text">{title}</h3>
              <button className="p-1 ml-auto" onClick={onCancel}>
                <span className={s.close}></span>
              </button>
            </div>

            {/*body*/}

            <div className="relative p-2 flex-auto">{children}</div>

            {/*footer*/}

            <div className="flex items-center justify-end p-4 border-t border-solid border-background-50 rounded-b gap-4">
              <Button onClick={onCancel} size="small" variant="outline">
                {cancelText}
              </Button>
              <Button className="py-2" onClick={onAccept} size="small" isLoading={isLoadingAccept}>
                {acceptText}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
);

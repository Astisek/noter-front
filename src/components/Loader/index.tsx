import loaderSvg from '@/assets/svg/bouncing-squares.svg';
import classnames from 'classnames';
import { HTMLAttributes } from 'react';

export const Loader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classnames('p-4 flex justify-center', className)} {...props}>
      <object type="image/svg+xml" data={loaderSvg as string} className="w-12 fill-text text-text"></object>
    </div>
  );
};

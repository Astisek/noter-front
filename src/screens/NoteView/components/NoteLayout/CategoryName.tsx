import { routerLinks } from '@/data/router';
import Link from 'next/link';

interface CategoryNameProps {
  name: string;
}

export const CategoryName = ({ name }: CategoryNameProps) => (
  <div className="p-1 flex justify-center relative">
    <Link href={routerLinks.category()}>
      <div className="text-text text-lg font-bold absolute block w-10 h-10 cursor-pointer left-2 hover:scale-110 transition-transform">
        ←
      </div>
    </Link>

    <div className="text-lg text-text text-center">{name}</div>
  </div>
);

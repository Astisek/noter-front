interface CategoryNameProps {
  name: string;
}

export const CategoryName = ({ name }: CategoryNameProps) => (
  <div className="p-1">
    <div className="text-lg text-text text-center">{name}</div>
  </div>
);

import { SortByEnum } from '@/api/models/note';
import { IOption } from '@/models/select.model';

export const sortItems = {
  [SortByEnum.Date]: 'By date modified',
  [SortByEnum.Name]: 'By name',
  [SortByEnum.Rate]: 'By rating',
};

export const sortItemsOptions = Object.entries(sortItems).map<IOption>(([key, value]) => ({
  label: value,
  value: key,
}));

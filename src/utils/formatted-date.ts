import { format } from 'date-fns';

format(new Date(2014, 1, 11), 'yyyy-MM-dd');

export const formattedDate = (date?: string) => {
  if (!date) {
    return date;
  }

  return format(new Date(date), 'yyyy.MM.dd');
};

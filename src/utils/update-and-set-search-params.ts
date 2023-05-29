import { SetURLSearchParams } from 'react-router-dom';

export const updateAndSetSearchParams = ({
  params,
  setSearchParams,
}: {
  params: Record<string, string | number | null | undefined>;
  setSearchParams: SetURLSearchParams;
}) => {
  const searchParams: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams[key] = String(value);
    }
  });

  setSearchParams(searchParams);
};

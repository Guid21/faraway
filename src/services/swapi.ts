import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TPeople = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

type TGetAllPeopleParams = { page: string, name: string } | void;
type TGetAllPeopleReturn = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPeople[];
};

type TGetAllPersonParams = { personId?: string }
type TGetAllPersonReturn = TPeople

export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query<TGetAllPeopleReturn, TGetAllPeopleParams>({
      query: ({ page, name } = { page: "1", name: "" }) => {
        const searchParams = new URLSearchParams({ page: String(page), search: name });

        return `people?${searchParams.toString()}`;
      },
    }),
    getPerson: builder.query<TGetAllPersonReturn, TGetAllPersonParams>({
      query: ({ personId }) => {
        return `people/${personId}`;
      },
    }),
  }),

});

export const { useGetPeopleQuery, useGetPersonQuery } = swapiApi;

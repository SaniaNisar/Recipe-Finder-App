// src/redux/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes' }),
  endpoints: (builder) => ({
    searchRecipes: builder.query({
      query: (query) => `search?query=${query}&apiKey=1d7f427583ac47a0a909dc2e0480fd48`,
    }),
    getRecipeDetails: builder.query({
      query: (id) => `/${id}/information?apiKey=1d7f427583ac47a0a909dc2e0480fd48`,
    }),
  }),
});

export const { useSearchRecipesQuery, useGetRecipeDetailsQuery } = apiSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { type Response } from './types/types'

const requestHeaders = {
  'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
  'Content-Type': 'application/json'
}

const createRequest = (url: string) => ({ url, headers: requestHeaders })

// API для тестирования, так как количество запросов ограничено
export const filmAPIUO = createApi({
  reducerPath: 'filmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/' }),
  endpoints: (build) => ({
    getFilmsByKeyword: build.query({
      query: (keyword: string) => createRequest(`api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`)
    })
  })
})

export const filmAPI = createApi({
  reducerPath: 'filmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev/' }),
  endpoints: (build) => ({
    getFilmsByKeyword: build.query({
      query: (keyword: string) => createRequest(`v1.2/movie/search?page=1&limit=5&query=${keyword}`)
    }),
    getTop24: build.query<Response, void>({
      query: () => createRequest('v1.3/movie?page=1&limit=24&selectFields=id&selectFields=name&selectFields=description&selectFields=year&selectFields=poster')
    })
  })
})

export const { useLazyGetFilmsByKeywordQuery, useGetTop24Query } = filmAPI

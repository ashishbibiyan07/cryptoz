import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_NEWS_API_KEY,
  "X-RapidAPI-Host": "news67.p.rapidapi.com",
};
const baseUrl = "https://news67.p.rapidapi.com/v2";
const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/crypto?languages=en`),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// const options = {
//   method: 'GET',
//   url: 'https://news67.p.rapidapi.com/v2/crypto',
//   headers: {
//     'X-RapidAPI-Key': 'c7f6e350e8msh5af16b8b4f7e781p1b3b37jsn4bf30dfe6866',
//     'X-RapidAPI-Host': 'news67.p.rapidapi.com'
//   }
// };

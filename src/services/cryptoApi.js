import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = { 'x-access-token' : 'coinrankingfdbc4a2f66c216103b3011e3d8dee704e692cef8ae357f8a'}
const baseUrl = 'https://api.coinranking.com/v2'; 
const createRequest = (url) => ({ url, headers: cryptoApiHeader})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/stats')
        })
    })
});

// creates hook to pull instantly to get all data for quey thanks to redux
export const { useGetCryptosQuery } = cryptoApi;


//////// rapidAPI has been deprecated kinda old stuff

/* 

const cryptoApiHeader = { 'x-access-token' : 'coinrankingfdbc4a2f66c216103b3011e3d8dee704e692cef8ae357f8a'}

const baseUrl = 'https://api.coinranking.com/v2'; 
const createRequest = (url) => ({ url, headers: cryptoApiHeader})

// Api to get info from RapidApi
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/stats')
        })
    })
});

*/
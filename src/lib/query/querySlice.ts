import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const querySlice= createApi({
    reducerPath:'user/api',
    baseQuery:fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL
    }),
    endpoints:(builder)=> ({
        getNotification:builder.query({
            query:()=> "/notification"
        })
    })

})

export const {useGetNotificationQuery}= querySlice
export default querySlice

import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: '..searchy',
    },
    reducers: {
        empty: (state) => {
            state.value = ''
        },
        setSearch: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { empty, setSearch } = searchSlice.actions

export default searchSlice.reducer
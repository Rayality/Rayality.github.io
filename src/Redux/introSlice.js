import { createSlice } from '@reduxjs/toolkit'

export const introControlSlice = createSlice({
    name: 'intro',
    initialState: {
        introState: false,
    },
    reducers: {
        setIntroState: (state, bool) => {
            state.introState = bool;
        }
    },
})

export const { setIntroState } = introControlSlice.actions

export default introControlSlice

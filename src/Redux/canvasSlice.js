import { createSlice } from '@reduxjs/toolkit'

export const canvasControlSlice = createSlice({
    name: 'canvasControl',
    initialState: {
        canvasState: false,
    },
    reducers: {
        setCanvasState: (state, bool) => {
            state.canvasState = bool;
        }
    },
})

export const { setCanvasState } = canvasControlSlice.actions

export default canvasControlSlice

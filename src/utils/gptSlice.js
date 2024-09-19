import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleGptSeachView: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        }
    }
})
export const { toggleGptSeachView } = gptSlice.actions
export default gptSlice.reducer
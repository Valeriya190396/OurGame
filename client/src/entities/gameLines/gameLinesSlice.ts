import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GameLine,
  GameLineId,
  GameLineStatusQuest,
} from "./types/gameLineTypes";
import GameLineApi from "./api/gameLinesApi";

type StateGameLines = {
  gameLines: GameLine[];
  error: string | undefined;
  loading: boolean;
};

const initialState: StateGameLines = {
  gameLines: [],
  error: undefined,
  loading: true,
};

// ПРОВЕРИТЬ
export const getGameLinesThunk = createAsyncThunk("load/gameLines", () =>
  GameLineApi.getAllGameLines()
);
export const updateGameLineThunk = createAsyncThunk(
  "update/gameLine",
  (obj: { id: GameLineId; body: GameLineStatusQuest }) =>
    GameLineApi.updateGameLine(obj)
);

const gameLineSlice = createSlice({
  name: "gameLines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGameLinesThunk.fulfilled, (state, action) => {
        state.gameLines = action.payload;
        state.loading = false;
      })
      .addCase(getGameLinesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGameLinesThunk.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateGameLineThunk.fulfilled, (state, action) => {
        state.gameLines = state.gameLines.map((gameLine) =>
          gameLine.id === action.payload.id ? action.payload : gameLine
        );
      })
      .addCase(updateGameLineThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateGameLineThunk.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default gameLineSlice;

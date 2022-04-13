import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../global/types/redux';

const initialState = {} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser(state, action: PayloadAction<UserState>) {
      state.user = {...action.payload?.user};
    },
  },
});

export const {loadUser} = userSlice.actions;
export default userSlice.reducer;

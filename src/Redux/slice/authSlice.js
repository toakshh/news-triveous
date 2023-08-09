import { createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase';

const auth = getAuth(app);

const initialState = {
  isLoggedIn: false, 
  user: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = !!action.payload;
      state.user = action.payload || null;
    },
    clearUser: () => {
      signOut(auth);
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

// Asynchronously listen to authentication state changes
export const listenToAuthChanges = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    dispatch(setUser(user ? user.email : null));
  });
};

export default authSlice.reducer;
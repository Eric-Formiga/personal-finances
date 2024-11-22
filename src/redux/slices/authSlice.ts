import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../@types/Auth";

interface AuthState {
  user: User | null,
  authToken: string | null,
  authStatus: "authenticated" | "not_authenticated" | "not_verified" 
}

const initialState: AuthState = {
  user: null,
  authToken: null,
  authStatus: "not_verified"
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setUser: (state, action: PayloadAction<AuthState['user']>)=>{
      state.user = action.payload
    },
    setAuthToken: (state, action: PayloadAction<AuthState['authToken']>) =>{
      state.authToken = action.payload
    },
    setAuthStatus: (state, action: PayloadAction<AuthState['authStatus']>) =>{
     state.authStatus = action.payload
    }
  }
})

export const {setUser, setAuthToken, setAuthStatus} = authSlice.actions

export default authSlice.reducer
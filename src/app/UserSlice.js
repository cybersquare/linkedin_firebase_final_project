import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import fire from "../firebase";

const auth = fire.auth;


export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null
    },
    reducers:{
        login:async (state, action)=>{
            console.log(action.payload)
        //    state.user = action.payload;
        const userCredential = await signInWithEmailAndPassword(auth, action.payload.email, action.payload.password);
        console.log(userCredential);
        console.log(auth.currentUser);
        },
        logout:(state, action)=>{
            state.user=null;
        },
        signup:(state, action)=>{
            console.log("signup");
            console.log(state);
            console.log(action);
            createUserWithEmailAndPassword(auth, 'monish.mohan1@gmail.com', "mypassword")
        },

    }
});

export const {login,logout,signup} = userSlice.actions;

export const selectUser = state=> state.user.user;

export default userSlice.reducer;




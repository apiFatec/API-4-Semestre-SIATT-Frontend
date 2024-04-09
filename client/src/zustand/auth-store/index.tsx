import { create } from "zustand";
import { State } from "./interfaces";
import { persist, redux } from "zustand/middleware";
import reducer from "./reducer";

export const initialState: State = {
    fields: {
      email: '',
      password: '',
    },
    isLoading: false,
}

export const authStore = create(persist(redux(reducer, initialState), {
    name: 'auth-user'
  }))
import { authStore } from ".";
import { Types } from "./types";
import { unstable_batchedUpdates } from "react-dom";

const actions = (dispatch: any) => ({
    changeFields: (payload: { key: 'email' | 'password', value: string}) => {
      console.log(payload)
      dispatch({ type: Types.AUTH_CHANGE_FIELDS, payload }) 
    },
    login: () => {
        unstable_batchedUpdates(async () => {
            const { fields } = authStore.getState(); 

            dispatch({ type: Types.AUTH_LOGIN_REQUEST });

            try {
                
            } catch (e) {
                dispatch({ type: Types.AUTH_LOGIN_REJECTED })
            }
        })
    }
})

export default actions;
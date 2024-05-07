import { authStore } from ".";
import apis from "../../apis";
import { Types } from "./types";
import { unstable_batchedUpdates } from "react-dom";

const actions = (dispatch: any) => ({
    changeFields: (payload: { key: 'email' | 'password', value: string}) => {
      dispatch({ type: Types.AUTH_CHANGE_FIELDS, payload }) 
    },
    login: () => {
        unstable_batchedUpdates(async () => {
            const { fields } = authStore.getState(); 

            dispatch({ type: Types.AUTH_LOGIN_REQUEST });

            try {
                const response = await apis({ baseURL: 'http://localhost:3000' }).post({
                    url: '/usuario/login',
                    data: fields
            })

                await dispatch({ type: Types.AUTH_LOGIN_FULFILLED, payload: response?.data });
            } catch (e) {
                dispatch({ type: Types.AUTH_LOGIN_REJECTED })
            }
        })
    },
    logout: () => {
        dispatch({ type: Types.AUTH_LOGOUT });
    }
})

export default actions;
import { Types } from "./types"

const reducer = (state: any, { type, payload }:any) => {
    switch(type) {
        case Types.AUTH_CHANGE_FIELDS:
            return{
                ...state,
                fields: {
                    ...state.fields,
                    [payload.key]: payload.value
                }
            }
        case Types.AUTH_LOGIN_REQUEST:
            return{
                ...state,
                isLoading: false,
            }
        case Types.AUTH_LOGIN_FULFILLED:
            return{
                ...state,
                isLoading: false,
                data: payload
            }
        case Types.AUTH_LOGIN_REJECTED:
            return{
                ...state,
                isLoading: false,
            }
    }

}

export default reducer;
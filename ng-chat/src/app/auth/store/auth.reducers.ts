import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
    error: boolean,
    message: string
}

const initialState: State = {
    token: null,
    authenticated: false,
    error: false,
    message: null
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch(action.type) {
        case AuthActions.SIGNUP:
        case AuthActions.SIGNIN:
            return {
                ...state,
                authenticated: true,
                error: false,
                message: null
            };
        case AuthActions.AUTH_FAILED:
            return {
                ...state,
                error: true,
                message: action.payload.error.message
            }
        case AuthActions.LOGOUT:
            return {
                ...state,
                token: null,
                authenticated: false
            }
        case AuthActions.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}
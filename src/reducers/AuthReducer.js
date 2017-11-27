const INITIAL_STATE = {
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false
};
import {
    EMAIL_CHANGED,
     PASSWORD_CHANGED,
      LOGIN_USER_ERROR,
       LOGIN_USER_SUCCESS,
       LOGIN_USER
    } from '../actions/types';


export default (state = INITIAL_STATE,action) => {
    console.log(action);
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            const newState = {...state,password: action.payload};
            return newState;

        case LOGIN_USER:
            return {...state, loading: true, error: ''};

        case LOGIN_USER_SUCCESS:
            return {
                ...state, 
                ...INITIAL_STATE,
                user: action.payload
                };

        case LOGIN_USER_ERROR:
            return {...state,error: 'Authentication Failed.', password: '', loading: false};
        

        default:
        return state;
    }
};
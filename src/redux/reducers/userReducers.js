import * as actionTypes from "../constants/userConstants";

const INITIAL_STATE = {
    user: {
        name: "",
        surname: "",
        email: "",
        userName: "",
        password: "",
    },
    addUserError: "",
    getUserError: "",
};

export const userReducer = (state = { INITIAL_STATE }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_USER:
            // const users = state.users.concat(action.payload);
            // return { ...state, users };
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.paylaod,
                },
            };
        case actionTypes.ADD_TO_USER_ERROR:
            return {
                ...state,
                addUserError: action.payload,
            };

        case actionTypes.ALL_USERS:
            return {
                ...state,
                users: action.payload,
            };

        case actionTypes.ALL_USERS_ERROR:
            return {
                ...state,
                addUserError: action.payload,
            };

        case actionTypes.GET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };

        case actionTypes.GET_USER_ERROR:
            return {
                ...state,
                getUserError: action.payload,
            };

        case actionTypes.OUT_OF_USER:
            return {
                ...state,
                // user: {
                //     name: "",
                //     surname: "",
                //     email: "",
                //     userName: "",
                //     password: "",
                // },
                user: [],
            };

        default:
            return state;
    }
};

import { createAction, handleActions } from 'redux-actions';

export const getAction = (name) => {
    return createAction(`GET_${name}`);
}

export const setAction = (name) => {
    return createAction(`SET_${name}`)
}

export const createGenericAction = (name) => {
    return createAction(`CREATE_${name}`)
}

export const updateAction = (name) => {
    return createAction(`UPDATE_${name}`)
}


export const getReducer = (name, defaultObj, setAsNull = false) => {
    return handleActions(
        new Map([
            [
                setAction(name),
                (state, action) => {
                    return action.payload
                }
            ]
        ]),
        setAsNull ? null : (defaultObj || { rows: [], total: 0 })
    );
}
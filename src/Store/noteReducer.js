const initialState = {
    notes: [],
}

export const ActionTypes = {
    SET_NOTES: 'SET_NOTES',
    DELETE_NOTES: 'DELETE_NOTES',
    NEW_NOTES: 'NEW_NOTES',
    EDIT_NOTES: 'EDIT_NOTES',
}

export const ActionCreaters = {
    setNotes: payload => ({ type: ActionTypes.SET_NOTES, payload }),
    deleteNote: payload => ({ type: ActionTypes.DELETE_NOTES, payload }),
    newNote: payload => ({ type: ActionTypes.NEW_NOTES, payload }),
    editNote: payload => ({ type: ActionTypes.EDIT_NOTES, payload }),
}

export default function NotesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_NOTES:
            return { ...state, notes: [...action.payload] };
        case ActionTypes.DELETE_NOTES:
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === action.payload.id) {
                    state.notes.splice(i, 1);
                    break;
                }
            }
            return { ...state, notes: [...state.notes] };
        case ActionTypes.NEW_NOTES:
            return { ...state, notes: [...state.notes, action.payload] }
        case ActionTypes.EDIT_NOTES:
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === action.payload.id) {
                    state.notes[i].value = action.payload.value;
                    console.log(state.notes[i].value);
                }else{
                    console.log("error");
                }
            }
            return { ...state, notes: [...state.notes] };
        default:
            return state;
    }
}
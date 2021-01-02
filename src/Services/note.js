import { ActionCreaters } from "../Store/noteReducer";
import { v4 as uuidv4 } from 'uuid';
export const GetNotes = async (dispatch) => {
    try {
        // api call
        const response = [
            { value: "Hello World1", id: 1 },
            { value: "Hello World2", id: 2 },
            { value: "Hello World3", id: 3 },
            { value: "Hello World4", id: 4 },
        ];
        dispatch(ActionCreaters.setNotes(response));
    } catch {
        console.log("Error!");
    }
}

export const DeleteNote = async (dispatch, note) => {
    try {
        dispatch(ActionCreaters.deleteNote(note));
    } catch {
        console.log("Error!");
    }
}

export const NewNote = async (dispatch, note) => {
    try {
        const response = { value: note, id: 1 }
        dispatch(ActionCreaters.newNote(response));
    } catch {
        console.log("Error!");
    }
}

export const EditNote = async (dispatch, note) => {
    try {
        const response = { value: note, id: 1}
        dispatch(ActionCreaters.editNote(response));
    } catch {
        console.log("Error!");
    }
}
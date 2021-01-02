import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './noteReducer';


export default configureStore({
  reducer: {
    notesReducer: NotesReducer,
  },
});

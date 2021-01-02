import React from 'react'
import './App.css';
import { NewNoteModal } from './Components/NoteModel';
import { NotesTable } from './Components/NoteTable';

const App = () =>{
  return(
    <div className = "App"> 
      <div  style={{maxWidth:'70%',margin:'auto'}}>
      <div style={{textAlign:'right'}}>
        <NewNoteModal />
      </div>
      <div>
      <NotesTable></NotesTable>
      </div>
      </div>
    </div>
  )

}

export default App;

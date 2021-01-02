import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteNote, GetNotes } from '../Services/note';
import { Button } from 'react-bootstrap';
import { EditNoteModal } from './NoteModel';

export const NotesTable = () => {
    const notes = useSelector(state => state.notesReducer.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        GetNotes(dispatch)
    }, []);

    return <table className='table table-dark'>
        <tbody>
            {
                notes.map(n =>
                    <tr>
                        <td style={{ textAlign: 'left' }} >{n.value}</td>
                        <td style={{ width: '3rem' }}>
                            <EditNoteModal note={n.value} />
                        </td>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => DeleteNote(dispatch, n)}>Delete</Button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>

}
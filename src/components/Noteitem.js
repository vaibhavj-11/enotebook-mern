import React, {useContext} from 'react'
import noteContext from "../context/notes/NoteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className={`card my-3 bg-${props.mode} border-light`}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title"  style={{color: props.mode === 'dark' ? 'white' : 'black'}} >{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}} onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "success");}}></i>
                        <i className="far fa-edit mx-2"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
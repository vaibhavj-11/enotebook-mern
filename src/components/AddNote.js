import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/NoteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added Successfully", "success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Title</label>
                    <input type="text" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Description</label>
                    <input type="text" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Tag</label>
                    <input type="text" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
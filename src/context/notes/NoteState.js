import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInital = [
        {
          "_id": "64e1bf65df33d1d3a7f75767",
          "user": "64e1a318e5c42d5c9a1ed8dc",
          "title": "My Title",
          "description": "Please wake up early tomorrow!!",
          "tag": "personal",
          "date": "2023-08-20T07:23:17.329Z",
          "__v": 0
        },
        {
          "_id": "64e620jb30fdca573f9431e8",
          "user": "64e1a318e5c42d5c9a1ed8dc",
          "title": "Note Number2",
          "description": "Delloite exam 2morrow!",
          "tag": "personal",
          "date": "2023-08-23T15:07:55.223Z",
          "__v": 0
        },
        {
            "_id": "64e620cb37fdca573f9431e8",
            "user": "64e1a318e5c42d5c9a1ed8dc",
            "title": "Note Number2",
            "description": "Delloite exam 2morrow!",
            "tag": "personal",
            "date": "2023-08-23T15:07:55.223Z",
            "__v": 0
          },
          {
            "_id": "64ebf65df33d1d3a7f75767",
            "user": "64e1a318e5c42d5c9a1ed8dc",
            "title": "My Title",
            "description": "Please wake up early tomorrow!!",
            "tag": "personal",
            "date": "2023-08-20T07:23:17.329Z",
            "__v": 0
          },
          {
            "_id": "64e620cb30fdma573f9431e8",
            "user": "64e1a318e5c42d5c9a1ed8dc",
            "title": "Note Number2",
            "description": "Delloite exam 2morrow!",
            "tag": "personal",
            "date": "2023-08-23T15:07:55.223Z",
            "__v": 0
          },
          {
              "_id": "64e620cb30gdca573f9431e8",
              "user": "64e1a318e5c42d5c9a1ed8dc",
              "title": "Note Number2",
              "description": "Delloite exam 2morrow!",
              "tag": "personal",
              "date": "2023-08-23T15:07:55.223Z",
              "__v": 0
            }
      ]
      const [notes, setNotes] = useState(notesInital)
    
      //Add a Note
        const addNote = (title, description, tag) => {
            //API Call
            console.log("Adding a new note");
            const note = {
                "_id": "64e620cb30gdca573f9431e8",
                "user": "64e1a318e5c42d5c9a1ed8dc",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2023-08-23T15:07:55.223Z",
                "__v": 0
              };
            setNotes(notes.concat(note));
        }

        //Delete a Note
        const deleteNote = (id) => {
            //API Call
            console.log("Deleting a note");
            const newNotes = notes.filter((note)=>{return note._id !== id});
            setNotes(newNotes);
        }

        //Edit a Note
        const editNote = (id, title, description, tag) => {
            //API Call
            console.log("Editing a note");
            let note = {
                "_id": id,
                "user": "64e1a318e5c42d5c9a1ed8dc",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2023-08-23T15:07:55.223Z",
                "__v": 0
              }
            const newNotes = notes.map((note)=>{
                return note._id === id ? note = note : note;
            })
            setNotes(newNotes);
        }
        
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
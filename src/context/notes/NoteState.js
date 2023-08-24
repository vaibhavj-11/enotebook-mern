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
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
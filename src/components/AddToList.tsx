
import React, { useState } from 'react';
import {IState as Props} from "../App";

interface IProps {
   people: Props["people"]
   setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ( {people, setPeople}) => {

   const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setInput({
         ...input,
         [e.target.name]: e.target.value
      })
   }

   const handleClick = ():void => {
      if (
         !input.name || 
         !input.age ||
         !input.img
      ) {
         return
      }

      setPeople([
         ...people,
         {
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note
         }
      ])

   }

  return (
    <div className='AddToList'>
        <input 
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
        />
        <input 
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        />
        <input 
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        />
        <textarea
        placeholder="Notes"
        className="AddToList-input"
        onChange={handleChange}
        value={input.note}
        name="notes"
        />
        <button className='AddToList-btn' onClick={handleClick}> 
         Add to List
        </button>
    </div>
  )
}

export default AddToList;
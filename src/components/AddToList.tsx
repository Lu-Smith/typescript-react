
import React, { useState } from 'react'

const AddToList = () => {

   const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
   })

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput({
         ...input,
         [e.target.value]: e.target.value
      })
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
        />
    </div>
  )
}

export default AddToList;
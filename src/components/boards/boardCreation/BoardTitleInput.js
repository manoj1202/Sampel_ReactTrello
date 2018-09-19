import React from "react"

const BoardTitleInput = (field) => (
    <label>
        <input 
            {...field.input}
            placeholder={field.placeholder}
            type="text"
            className="input"
        />
    </label>
)

export default BoardTitleInput
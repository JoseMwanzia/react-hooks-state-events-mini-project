import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({text: "", category: ""})
  const [category, setCategory] = useState("")

  
  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
  }

const handleSubmit = (e) => {
  e.preventDefault();
  onTaskFormSubmit(formData)
  setFormData({ text: "", category: "" });
}

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details

        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category

        <select name={category} value= {formData.category} onChange={handleChange}>
          {categories.map((category) => category !== "All" && <option key={category}>{category}</option>
      )}

          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

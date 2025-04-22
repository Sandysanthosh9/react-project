import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [form, setForm] = useState({ name: "", price: "", description: "", category: "" });
  const [image, setImage] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach(key => data.append(key, form[key]));
    data.append("image", image);
    
    try {
      await axios.post("http://localhost:5000/api/menu", data);
      alert("Item added!");
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Menu Item</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="price" placeholder="Price" onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} className="form-control mb-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="form-control mb-2"></textarea>
        <input type="file" onChange={e => setImage(e.target.files[0])} className="form-control mb-3" />
        <button className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

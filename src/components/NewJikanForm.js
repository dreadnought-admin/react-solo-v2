import React, { useState } from 'react'
import uuid from 'react-uuid';
 
 
const NewJikanForm = ({ addNewJikan }) => {
 
    const startValues = {
        
        image_url: "",
        images: {
            jpg: { image_url: "" }},
        title: "",
        title_japanese: "",
        type: "",
        status: "",
        episodes: 0,
        airing: false,
        rating: "",
        synopsis: "",
        background: "",
 
    };
 
    const [formData, setFormData] = useState(startValues);
 
    const handleChange = (e) => {
       
        const {name, value} = e.target
        setFormData((formData) => ({...formData, [name]: value}))
    };

    const handleChecked = (e) => {
        setFormData({...formData, [e.target.title]: e.target.checked})
    };
 
    const handleFormSubmit = (e) => {
        e.preventDefault();
        formData.images.jpg.image_url=formData.image_url
        alert("New anime added! ありがとうございました (Thank you)! 🧧")
 
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ ...formData })
        };
 
    fetch(`http://localhost:3000/anime/`, configObj)
    .then((r) => r.json())
    .then((anime) => {
        addNewJikan(anime)
        setFormData({

            
            image_url: "",
            images: {
                jpg:
                { image_url: "" }
            },
            title: "",
            title_japanese: "",
            type: "",
            status: "",
            episodes: 0,
            airing: false,
            rating: "",
            synopsis: "",
            background: ""
   
        });
    });
}
 
 
  return (
    <div>
        <h2>Add to the Database!</h2>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
 
            <input
            type="text"
            name="image_url"
            placeholder="Enter an image url"
            value={formData.image_url}
            onChange={handleChange}
   
            />
 
            <input
            type="text"
            name="title"
            placeholder="Enter a title"
            value={formData.title}
            onChange={handleChange}
            />
 
            <input
            type="text"
            name="title_japanese"
            placeholder="Enter a Japanese title"
            value={formData.title_japanese}
            onChange={handleChange}
            />
 
            <input
            type="text"
            name="type"
            placeholder="Enter your anime type (TV, Movie, etc.)"
            value={formData.type}
            onChange={handleChange}
            />
 
 
            <label className="label">Still Airing:</label>

            <input 
            type="radio"
            name="airing"
            value={formData.airing}
            onChange={handleChecked}
            />

            <label className="label">No. of Episodes:</label>
            <input
            type="number"
            name="episodes"
            value={formData.episodes}
            onChange={handleChange}
            />
 
 
            <input
            type="text"
            name="rating"
            placeholder="Rating (G, PG, R, etc.)"
            value={formData.rating}
            onChange={handleChange}
            />
 
            <input
            type="text"
            rows="3"
            cols="50"
            name="synopsis"
            placeholder="Enter a synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            />
 
            <input
            type="text"
            rows="3"
            cols="50"
            name="background"
            placeholder="Enter a background"
            value={formData.background}
            onChange={handleChange}
            />
 
            <button type="button" onClick={handleFormSubmit}>Submit!</button>
 
        </form>
    </div>
  );
}
 
export default NewJikanForm;
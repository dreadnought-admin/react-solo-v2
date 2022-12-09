import React, { useState } from 'react'
import uuid from 'react-uuid';
 
 
const NewJikanForm = ({ addNewJikan }) => {
 
    const startValues = {
        
        id: "",
        image_url: "",
        youtube_id: "",
        trailer: {
            youtube_id: ""
        },
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
        formData.trailer.youtube_id=formData.youtube_id
        alert("New anime added! ありがとうございました (Thank you)! 🧧")
 
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ ...formData })
        };
 
    fetch(`http://localhost:4000/anime/`, configObj)
    .then((r) => r.json())
    .then((anime) => {
        addNewJikan(anime)
        setFormData({

            id: uuid(),
            image_url: "",
            youtube_id: "",
            trailer: {
                youtube_id: ""
            },
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
    <div className="formContainer">
        <div className="inputs">
        <h2>Add to the Database!</h2>
        <form className="newForm" autoComplete="off" onSubmit={handleFormSubmit}>
        <fieldset className="newFormField">
            <legend>
                OwO? What's This? 
            </legend>
            <h2>
                Submit a New Anime!
            </h2>
            <ul className="inputList">
                <li>
                    <label className="label">Image URL: </label>
                    <input
                    className="formInput"
                    type="text"
                    name="image_url"
                    placeholder="Enter an image url"
                    value={formData.image_url}
                    onChange={handleChange}
                    />
                </li>
                <li>
                    <label className="label">Title: </label>
                    <input
                    className="formInput"
                    type="text"
                    name="title"
                    placeholder="Enter a title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </li>
                <li>
                    <label className="label">Japanese Title: </label>
                    <input
                    className="formInput"
                    type="text"
                    name="title_japanese"
                    placeholder="Enter a Japanese title"
                    value={formData.title_japanese}
                    onChange={handleChange}
                    />
                </li>
                <li>
                    <label className="label">Anime Type:</label>
                    <input
                    className="formInput"
                    type="text"
                    name="type"
                    placeholder="Enter your anime type (TV, Movie, etc.)"
                    value={formData.type}
                    onChange={handleChange}
                    />
                </li>
    
                <li>
                    <label className="label">Still Airing (Mark if Yes):</label>
                    <input 
                    className="formInput"
                    type="radio"
                    name="airing"
                    value={formData.airing}
                    onChange={handleChecked}
                    />
                </li>
                <li>
                    <label className="label">No. of Episodes:</label>
                    <input
                    className="formInput"
                    type="number"
                    name="episodes"
                    value={formData.episodes}
                    onChange={handleChange}
                    />
                </li>
                <li>
                    <label className="label">Enter a YouTube Id:</label>
                    <input
                    className="formInput"
                    type="text"
                    name="youtube_id"
                    placeholder="Enter a YouTube Id Here"
                    value={formData.youtube_id}
                    onChange={handleChange}
                    />
                </li>   
                

                <li>
                    <label className="label">Rating: </label>
                    <input
                    className="formInput"
                    type="text"
                    name="rating"
                    placeholder="Rating (G, PG, R, etc.)"
                    value={formData.rating}
                    onChange={handleChange}
                    />
                </li>
                <li>
                    <label className="label">Synopsis: </label>
                    <input
                    className="formInput"
                    type="text"
                    rows="3"
                    cols="50"
                    name="synopsis"
                    placeholder="Enter a synopsis"
                    value={formData.synopsis}
                    onChange={handleChange}
                    />
                </li>
                <li>
                    <label className="label">Background: </label>
                    <input
                    className="formInput"
                    type="text"
                    rows="3"
                    cols="50"
                    name="background"
                    placeholder="Enter a background"
                    value={formData.background}
                    onChange={handleChange}
                    />
                </li>
            </ul>
        </fieldset>
            <button className= "button" type="button" onClick={handleFormSubmit}>Submit! ʕ •ᴥ• ʔ</button>
 
        </form>
        </div>
        <div className="formImageContainer">
            <img className="formImage" src="../images/vagabond.png"></img>
        </div>
        <div className="clear">

        </div>
    </div>
  );
}
 
export default NewJikanForm;
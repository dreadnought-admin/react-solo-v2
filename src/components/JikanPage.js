import { useState, useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NewSubmission from './NewSubmission';
import JikanList from './JikanList';

const JikanPage = () => {
    
    const [jikanData, setJikanData] = useState([]);
    
    const fetchData = () => {
        const waifuAPI = "https://waifu.pics/api/sfw/waifu";
        const jikanAPI = "https://api.jikan.moe/v4/anime/";
        
        
        const getJikanData = axios.get(jikanAPI)

        axios.all([getJikanData]).then(
            axios.spread((...allData) => {
                const allJikanData = allData[1].data.data;

                setJikanData(allJikanData)
            })
            )
        }
        
        useEffect(() => {
            fetchData();
        }, [])
        
        console.log({jikanData})
        
        const submitNewAnime = newAnime => {
            const newAnimeCollection = [...jikanData, newAnime];
            setJikanData(newAnimeCollection)
        }

  return (
    <div>
      <JikanList 
      jikanData={jikanData} 
      setJikan={setJikanData}
      />
    
      

    
    </div>
  )
}

export default JikanPage

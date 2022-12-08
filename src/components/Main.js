import { useState, useEffect } from 'react';
import { Router, Link } from 'react-router-dom'
import axios from 'axios';
import JikanList from  './JikanList';
import NewJikanForm from './NewJikanForm';
import WaifuContainer from './WaifuContainer';
import Search from './Search';
 
const Main = () => {

    const [jikanData, setJikanData] = useState([]);
    const [waifuData, setWaifuData] = useState([]);
   
    const fetchData = () => {
      const waifuAPI = "https://waifu.pics/api/sfw/waifu";
      const jikanAPI = "https://api.jikan.moe/v4/anime/";
   
      const getWaifuData = axios.get(waifuAPI)
      const getJikanData = axios.get(jikanAPI)
   
      axios.all([getWaifuData, getJikanData]).then(
          axios.spread((...allData) => {
              const allWaifuData = allData[0].data;
              const allJikanData = allData[1].data.data;
   
              setWaifuData(allWaifuData)
              setJikanData(allJikanData)
          })
      )
    }
   
    useEffect(() => {
      fetchData();
    }, [])

    console.log({jikanData})
    console.log({waifuData})

    const [search, setSearch] = useState("")
    const resultingJikanToDisplay = jikanData.filter(jikan => {
        return(
        jikan.title.toLowerCase().includes(search.toLowerCase())
        || jikan.type.toLowerCase().includes(search.toLowerCase())
        || jikan.rating.toLowerCase().includes(search.toLowerCase())
    )
    })
   
    console.log({jikanData})
    console.log({waifuData})  

    const addNewJikan = (jikan) => {
        fetch("http://localhost:4000/anime", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jikan)
        });

        setJikanData([...jikanData, jikan])
    }
 
    return (
        <div>
            <div className="main">
                <div>
                    <h1><em>Yōkoso</em><strong>ようこそ!</strong></h1>
                    <h3>Search through our vast collection of anime & manga</h3>
                    <p>Discover new things or revisit classic favourites</p>
                </div>
                <span>
               
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Anime">
                        <button className="icon">㊙️</button>
                    </a>
                    <a target="_blank" href="https://www.japan.travel/en/us/">
                        <button className="icon">🗾</button>
                    </a>
                    <a target="_blank" href="https://animerecipes.tumblr.com/">
                        <button className="icon">🍥</button>
                    </a>
               
                </span>
                <div>
                    <h3><em>"Anime was a mistake. It's nothing but trash."</em></h3>
                    <p> — Hayao Miyazaki</p>
                </div>
            </div>
            <div className="temporary">
                <Search search={search} setSearch={setSearch}/>
                <JikanList jikans={resultingJikanToDisplay}/>
                <NewJikanForm addNewJikan={addNewJikan}/>
                <WaifuContainer waifus={waifuData} setWaifus={setWaifuData}/>
            </div>
        </div>
    );
};
 
export default Main;
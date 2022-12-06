import axios from 'axios';
import { useState, useEffect } from 'react'; 

import JikanHome from './JikanHome';
import WaifuHome from './WaifuHome';


const HomeContainer = () => {

  const [jikanData, setJikanData] = useState([]);
  const [waifuData, setWaifuData] = useState([]);

  const fetchData = () => {
    const waifuAPI = "https://waifu.pics/api/sfw/waifu";
    const jikanAPI = "https://api.jikan.moe/v4/anime/";

    const getWaifuData = axios.get(waifuAPI)
    const getJikanData = axios.get(jikanAPI)

    axios.all([getWaifuData, getJikanData]).then(
        axios.spread((...allData) => {
            const allWaifuData = allData[0].data.url;
            const allJikanData = allData[1]

            setWaifuData(allWaifuData)
            setJikanData(allJikanData)
        })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  
    return ( 
        <div className="temporary">
            <img src={waifuData}></img>
            <JikanHome />
            <WaifuHome />
        </div>
    );
};

export default HomeContainer;
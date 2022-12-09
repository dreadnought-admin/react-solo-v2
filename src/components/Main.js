import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import About from './About';
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
        <div className="main">
            <div className="mainBox">
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    
                    <Route exact path="/database">
                        <Search search={search} setSearch={setSearch}/>
                        <JikanList jikans={resultingJikanToDisplay}/>
                    </Route>

                    <Route path="/database/new">
                        <NewJikanForm addNewJikan={addNewJikan}/>
                    </Route>


                    <Route path="/waifu">
                        <WaifuContainer waifus={waifuData} setWaifus={setWaifuData}/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};
 
export default Main;
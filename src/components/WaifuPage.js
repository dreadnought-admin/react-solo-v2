import axios from 'axios';
import { useState, useEffect } from 'react'
import WaifuContainer from './WaifuContainer'

const WaifuPage = ({waifu}) => {

    const [waifuData, setWaifuData] = useState([]);
  
    const fetchData = () => {

      const waifuAPI = "https://waifu.pics/api/sfw/waifu";
      
  
      const getWaifuData = axios.get(waifuAPI)
  
      axios.all([getWaifuData]).then(
          axios.spread((...allData) => {
              const allWaifuData = allData[0].data;
  
              setWaifuData(allWaifuData)

          })
      )
    }
  
    useEffect(() => {
      fetchData();
    }, [])

  return (
    <div>
      <WaifuContainer waifuData={waifuData}/>
    </div>
  )
}

export default WaifuPage

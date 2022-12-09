import WaifuCard from "./WaifuCard";
import { useState } from 'react';

const WaifuContainer = ({ waifus }) => {

    const [isKawaii, setKawaii] = useState(true);
    
    const onToggleKawaii = () => {
        setKawaii((isKawaii) => !isKawaii);
      }; 
    
    return (
        <div className="temporary">
            <WaifuCard waifu={waifus} isKawaii={isKawaii} onToggleKawaii={onToggleKawaii}/>
        </div>
    );
};
 
export default WaifuContainer;

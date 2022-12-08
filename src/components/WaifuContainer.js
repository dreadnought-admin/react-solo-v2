import WaifuCard from "./WaifuCard";

const WaifuContainer = ({ waifus }) => {

    console.log({waifus})
    return (
        <div className="temporary">
            <WaifuCard waifu={waifus} />
        </div>
    );
};
 
export default WaifuContainer;

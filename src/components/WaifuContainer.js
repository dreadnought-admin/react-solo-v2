import WaifuCard from './WaifuCard';


const WaifuContainer = ({ waifuData }) => {
    return (
        <div className="temporary">
            <WaifuCard waifu={waifuData} />
        </div>
    );
};

export default WaifuContainer;